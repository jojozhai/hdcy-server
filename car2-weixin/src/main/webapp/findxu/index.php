<?php
require_once "jssdk1.php";
$jssdk = new JSSDK("wx3df79c54a366e5da", "02551647729a13c62a112da51a357dea");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <!-- <meta content="width=device-width,width=640" name="viewport"> -->
        <meta content="width=device-width,width=640,user-scalable=no" name="viewport" >
        <link rel="stylesheet" href="css/reset.css" media="screen" title="no title" charset="utf-8">
        <link rel="stylesheet" href="css/layout.css" media="screen" title="no title" charset="utf-8">
        <link rel="stylesheet" href="css/keyframes.css" media="screen" title="no title" charset="utf-8">
        <title></title>
        <style media="screen"></style>
    </head>
    <body>
        <div class="container">
            <div id="audiocontainer">
                <audio id="bgsound" loop="loop" preload src="sound/bg.mp3" autoplay="autoplay" ></audio>
            </div>
            <div >
                <audio id="playtxtsound" loop="loop"  src="sound/playtxt.mp3" ></audio>
            </div>

            <div class="page1">
                <div class="circle"></div>
                <div class="xutou"></div>
                <div class="txt"></div>
            </div>
            <div class="page2">
                <div id="word"></div>
                <img id="star2" src="img/star2.png" alt="" />
                <img id="star4" src="img/star4.png" alt="" />
                <img id="star3" src="img/star3.png" alt="" />
                <img id="star5" src="img/star5.png" alt="" />
                <div id="super" >
                    <img id="subody" src="img/super_body1.png"
                     alt="" />
                    <img id="suhead" src="img/super_head.png" alt="" />
                </div>
                <div class="phonebox">
                    <img id="phone" src="img/phone.png" alt="" />

                    <div id="chip1">
                        <img src="img/chip1.png" alt="" />
                        <img src="img/super_head1.png" alt="" />
                    </div>
                    <div id="chip2">
                        <img src="img/chip2.png" alt="" />
                         <img src="img/super_head1.png" alt="" />
                    </div>
                    <div id="chip3">
                        <img src="img/chip3.png" alt="" />
                        <img src="img/super_head1.png" alt="" />
                    </div>
                    <div id="chip4">
                        <img src="img/chip4.png" alt="" />
                        <img src="img/super_head1.png" alt="" />
                    </div>
                     <div id="chip5">
                        <img src="img/chip5.png" alt="" />
                        <img src="img/super_head1.png" alt="" />
                    </div>
                    <div id="chip6">
                        <img src="img/chip6.png" alt="" />
                        <img src="img/super_head1.png" alt="" />
                    </div>
                    <div id="chip7">
                        <img src="img/chip7.png" alt="" />
                        <img src="img/super_head1.png" alt="" />
                    </div>
                    <div id="chip8">
                        <img src="img/chip8.png" alt="" />
                        <img src="img/super_head1.png" alt="" />
                    </div>

                </div>
                <ul>
                    <li><img src="img/star10.png" alt="" /></li>
                    <li><img src="img/star5.png" alt="" /></li>
                    <li><img src="img/star9.png" alt="" /></li>
                    <li><img src="img/star11.png" alt="" /></li>
                    <li><img src="img/star4.png" alt="" /></li>
                    <li><img src="img/star6.png" alt="" /></li>
                    <li><img src="img/star7.png" alt="" /></li>
                    <li><img src="img/star8.png" alt="" /></li>

                </ul>

            </div>

            <div class="bg-music">
                <img id="musicOn" src="img/music_on.png" alt="" />
                <img id="musicOff" src="img/music_off.png" alt="" />
            </div>
            <a class="upa" href="javascript:void(0)" >
                <p> 找齐徐峥 启动能量</p>
                <img src="img/up.png" alt="" />
            </a>

        </div>




    </body>
    <!-- <script src="js/MetaHandler.js" charset="utf-8"></script> -->
    <script src="js/jquery-2.2.3.min.js" charset="utf-8"></script>
    <script src="js/index.js" charset="utf-8"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script type="text/javascript">
     
    wx.config({
        //true出现弹框
      debug: false,
      appId: '<?php echo $signPackage["appId"];?>',
      timestamp: <?php echo $signPackage["timestamp"];?>,
      nonceStr: '<?php echo $signPackage["nonceStr"];?>',
      signature: '<?php echo $signPackage["signature"];?>',
      jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
          "onMenuShareTimeline",
          "onMenuShareAppMessage",
          "onMenuShareQQ",
          "onMenuShareWeibo",
      ]
    });
    wx.ready(function () {
      // 在这里调用 API
      wx.onMenuShareTimeline({
          title: '分享标题', // 分享标题
          link: '集能量，寻大奖', // 分享链接
          imgUrl: 'http://findxu.applinzi.com/findxu/img/dog.jpg',
          success: function () {
              // 用户确认分享后执行的回调函数
             
          },
          cancel: function () {
              // 用户取消分享后执行的回调函数
          }
      });
        //分享给朋友
      wx.onMenuShareAppMessage({
          title: '寻找徐峥', // 分享标题
          desc: '集能量，寻大奖', // 分享描述
          link: '', // 分享链接
          imgUrl: 'http://findxu.applinzi.com/findxu/img/dog.jpg', // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
              // 用户确认分享后执行的回调函数
          },
          cancel: function () {
              // 用户取消分享后执行的回调函数
          }
      });

      wx.onMenuShareQQ({
          title: '', // 分享标题
          desc: '', // 分享描述
          link: '', // 分享链接
          imgUrl: '', // 分享图标
          success: function () {
             // 用户确认分享后执行的回调函数
          },
          cancel: function () {
             // 用户取消分享后执行的回调函数
          }
      });

      wx.onMenuShareWeibo({
          title: '', // 分享标题
          desc: '', // 分享描述
          link: '', // 分享链接
          imgUrl: '', // 分享图标
          success: function () {
             // 用户确认分享后执行的回调函数
          },
          cancel: function () {
              // 用户取消分享后执行的回调函数
          }
      });
  });
    </script>
</html>
