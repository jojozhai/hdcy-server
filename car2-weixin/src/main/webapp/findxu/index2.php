<?php
    header("Content-type:text/html;charset=utf-8");
    $code = $_GET['code'];
    $url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx3df79c54a366e5da&secret=02551647729a13c62a112da51a357dea&code=".$code."&grant_type=authorization_code";
    $res=json_decode(file_get_contents($url));
    $access_token=$res->access_token;
    $openid=$res->openid;
    $infourl="https://api.weixin.qq.com/sns/userinfo?access_token=".$access_token."&openid=".$openid."&lang=zh_CN";
    $infores=json_decode(file_get_contents($infourl));
	foreach ($infores as $key => $value) {
        $$key=$value;
    }
    echo "$openid";

?>