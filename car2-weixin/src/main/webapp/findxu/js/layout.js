$(document).ready(function () {
    function preloadimages(obj, cb) {
        var loaded = 0;
        var toload = 0;
        var images = obj instanceof Array ? [] : {};

        for (var i = 0; i < obj.length; i++) {
            toload++;
            images[i] = new Image();
            images[i].src = obj[i];
            images[i].onload = load;
            images[i].onerror = load;
            images[i].onabort = load;
        }

        function load() {
            if (++loaded >= toload) {
                cb(images);
            }
        }
    }

    var pic_load = ["/img/word_bg.jpg", "/img/loading_xuzheng.png", "/img/loading_txt.png", "/img/star.png", "/img/star2.png", "/img/star4.png", "/img/star3.png", "/img/star5.png", "/img/super_head.png", "/img/super_body1.png", "/img/super_glasses.png", "/img/phone.png", "/img/chip1.png", "/img/chip2.png", "/img/chip3.png", "/img/chip4.png", "/img/chip5.png", "/img/chip6.png", "/img/chip7.png", "/img/chip8.png", "/img/star11.png", "/img/star10.png", "/img/star5.png", "/img/star9.png", "/img/star4.png", "/img/star6.png", "/img/star7.png", "/img/star8.png", "/img/up.png", "/img/baobei.png", "/img/bg.jpg", "/img/xuzheng.png", "/img/color_yan.png", "/img/CSSatyr.png", "/img/game_info_bt.png", "/img/kuang_bg.png", "/img/one_guan_pic.png", "/img/one_pic1.png", "/img/one_pic2.png", "/img/one_pic3.png", "/img/person_kuang.png", "/img/tietou.png", "/img/vivo_mobile.png", "/img/xuzheng_kuang.png", "/img/xuzheng_succ_kuang.png"];
    for (var i = 0; i < pic_load.length; i++) {
        pic_load[i] = window.base_resource_url + pic_load[i];
    }

    var ts_before_load = (new Date()).getTime();
    preloadimages(pic_load, function () {
        var f = function () {
            $('#typesound')[0].play();
            $('#loading').hide();
            $('#word_wrap').show();
            flyFn();
            run(0);
        };
        var now = (new Date()).getTime();
        if (now - ts_before_load >= 1000) {
            f();
        } else {
            setTimeout(function () {
                f();
            }, 800 - (now - ts_before_load));
        }
    });

    function run() {
        var $word = $('#word');
        var workarr = ["公元9025年", "外星人为了争夺", "封印在vivo手机中的神秘能量",
            "发起宇宙战乱", "超人徐峥为了保卫神秘能量", "带着手机来到浩瀚宇宙中",
            "分身成为8个自己", "分别保卫8块手机碎片", "消失在太阳系的八大行星中",
            "据说找齐徐峥的8个分身", "就能启动神秘能量保护地球", "...", ""];
        var num = 0;
        var timers = setInterval(function () {
            if (num >= workarr.length - 1) {
                $('#typesound').addClass('music_finish').attr('src', '');

                clearInterval(timers);
                setTimeout(function () {
                    $word.addClass('word'); // 隐藏
                    setTimeout(function () {
                        $word.hide();
                        $('#word_star1').css({left: 230, top: 130});
                        $('#word_star3').css({left: 210, bottom: 140});
                        $('#word_star4').css({left: 70});
                    }, 1000);
                    $('#supers').attr('class', 'supers');
                    setTimeout(function () {
                        $('#phone').attr('class', 'phone');
                        setTimeout(function () {
                            window.__super_stop = true;
                            $('#supers').hide();
                            chipFn();
                            setTimeout(function () {
                                $('#up').show();
                            }, 7000)
                        }, 1000)
                    }, 5000);
                }, 1000);
                return;
            }
            $word.html($word.html() + workarr[num] + "<br>");
            num++;
        }, 600);
    }

//超人：
    function flyFn() {
        var super_body = document.getElementById("super_body");
        setTimeout(function () {
            super_body.src = window.base_resource_url + "/img/super_body2.png";
            setTimeout(function () {
                super_body.src = window.base_resource_url + "/img/super_body3.png";
                setTimeout(function () {
                    super_body.src = window.base_resource_url + "/img/super_body1.png";
                    if (window.__super_stop) {
                        return;
                    }
                    flyFn();
                }, 300)
            }, 300)
        }, 300)
    }

//碎片：
    function chipFn() {
        var chips = document.querySelectorAll("#phone_wrap>div");
        var stars = document.querySelectorAll("#star>img");
        var headers = document.querySelectorAll("#phone_wrap>div>img:nth-child(2)");

        $('#word_star1,#word_star2,#word_star3,#word_star4').css('opacity', 0);
        for (var i = 0; i < chips.length; i++) {
            j = i + 1;
            chips[i].className = "chip" + j;
            headers[i].className = "header";
            if (j > 7) {
                break;
            }
        }
        setTimeout(function () {
            for (var i = 0; i < chips.length; i++) {
                j = i + 1;
                stars[i].style.opacity = "1";
                $(stars[i]).css({'visibility': 'visible'});
                if (j > 7) {
                    return;
                }
            }
        }, 4000);
    }

    var clickEvent = 'click';
    $('#music_on').on(clickEvent, function () {
        $('#bgsound').attr('src', '');
        $('#typesound').attr('src', '');
        $('#music_on').hide();
        $('#music_off').show();
    });
    $('#music_off').on(clickEvent, function () {
        $('#bgsound').attr('src', window.base_resource_url + "/sound/bg.mp3");
        $('#bgsound')[0].play();
        if (!$('#typesound').hasClass('music_finish')) {
            $('#typesound').attr('src', window.base_resource_url + "/sound/type.mp3");
            $('#typesound')[0].play();
        }
        $('#music_on').show();
        $('#music_off').hide();
    });
    //滑动点击开始游戏
    $('#up').on('click touchstart touchmove', function () {
        setTimeout(function () {
            window.location.href = "/index/next";
        }, 500)
    });
    $('body').on('touchmove', function (event) {
        event.preventDefault();
    });
});
