<?php
class JSSDK {
  private $appId;
  private $appSecret;

  public function __construct($appId, $appSecret) {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
  }
  // 第三步   验证过程 进行config权限验证    它返回了一个数组，都是一些参数
  public function getSignPackage() {
    //获取签名
    $jsapiTicket = $this->getJsApiTicket();
    // 获取url
    // 注意 URL 一定要动态获取，不能 hardcode.
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    // 获取时间戳
    $timestamp = time();
    // 获取字符串
    $nonceStr = $this->createNonceStr();

    // 这里参数的顺序要按照 key 值 ASCII 码升序排序
    $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

    $signature = sha1($string);

    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string
    );
    return $signPackage;
  }
  // 公用的，不在流程里，只是在某个时候会调用它  产生随机字符串
  private function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }
  // 第二步   获取票据ticket签名
    private function getJsApiTicket() {
        // jsapi_ticket 应该全局存储与更新，以下代码以写入到文件中做示例
        // ============
        // TODO
        //$data = json_decode($this->get_php_file("jsapi_ticket.php"));
        $access_token = $this->getAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$access_token";
        $db = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
        if ($db) {
            mysql_select_db(SAE_MYSQL_DB, $db);
        };
        $sql = "SELECT tickets FROM tickets";
        $res = mysql_query($sql);
        if(mysql_num_rows($res) <= 0) {
            $ticket = json_decode($this->httpGet($url))->ticket;
            $time = time();
            $sql = "INSERT INTO tickets (tickets, `timesstamp`) VALUES ('$ticket', '$time')";
            mysql_query($sql);
            //变量接收
            $ticket = $ticket;
        } else {
            $sql = "SELECT timesstamp FROM tickets";
            $res = mysql_query($sql);
            $timestamp = mysql_fetch_object($res)->timesstamp;
            $nowtime = time();
            if($nowtime - $timestamp > 7000) {  //    过期的话，重新获取token，更新数据库   token timestamp
                $ticket = json_decode($this->httpGet($url))->ticket;
                $time = time();
                $sql = "UPDATE tickets SET ticket = $ticket, `timesstamp` = $time";
                mysql_query($sql);
                $ticket = $ticket;
            } else {   //      没有过期 从数据库中取出数据 直接返回
                $sql = "SELECT tickets FROM tickets";
                $res = mysql_query($sql);
                $ticket = mysql_fetch_object($res)->tickets;
                $ticket = $ticket;
            };
        };
        mysql_close($db);
        return $ticket;

      }
  //   第一步   获取access_token
      private function getAccessToken() {
        // access_token 应该全局存储与更新，以下代码以写入到文件中做示例
        // ===========
        // TODO
        // $data = json_decode($this->get_php_file("access_token.php"));

        //获取token
        //获取ticket
        //都要验证
        $url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$this->appId&secret=$this->appSecret";


        $db = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);

        if ($db) {
            mysql_select_db(SAE_MYSQL_DB, $db);
        };

        $sql = "SELECT token FROM tokens2";
        $res = mysql_query($sql);

        if(mysql_num_rows($res) <= 0) {
            $access_token = json_decode($this->httpGet($url))->access_token;
            //echo $token;
            $time = time();
            $sql = "INSERT INTO tokens2 (token, `timesstamp`) VALUES ('$access_token', '$time')";
            mysql_query($sql);
            $access_token = $access_token;
        } else {
            $sql = "SELECT timesstamp FROM tokens2";
            $res = mysql_query($sql);
            $timestamp = mysql_fetch_object($res)->timesstamp;
            $nowtime = time();
            if($nowtime - $timestamp > 7000) {  //    过期的话，重新获取token，更新数据库   token timestamp
                $access_token = json_decode($this->httpGet($url))->access_token;
                $time = time();
                $sql = "UPDATE tokens2 SET token = '$access_token', `timesstamp` = '$time'";
                mysql_query($sql);
                $access_token = $access_token;
            } else {   //      没有过期 从数据库中取出数据 直接返回
                $sql = "SELECT token FROM tokens2";
                $res = mysql_query($sql);
                $access_token = mysql_fetch_object($res)->token;
                $access_token = $access_token;
            };
        };
        mysql_close($db);
        return $access_token;

    }
  //  第零步  公用的  第一步第二步都会用到它  file_get_contents()的替换方案，因为这个方法有不稳定性;
private function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    // 为保证第三方服务器与微信服务器之间数据传输的安全性，所有微信接口采用https方式调用，必须使用下面2行代码打开ssl安全校验。
    // 如果在部署过程中代码在此处验证失败，请到 http://curl.haxx.se/ca/cacert.pem 下载新的证书判别文件。
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, true);
    curl_setopt($curl, CURLOPT_URL, $url);

    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
}
}
?>
