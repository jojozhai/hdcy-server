var supportsTouch = false;
if ('ontouchstart' in window) {
    //iOS & android
    supportsTouch = true;
} else if(window.navigator.msPointerEnabled) {
    //Win8
    supportsTouch = true;
}
var clickEvent = supportsTouch ? 'touchstart' : 'click';
$person_wrap_width = $('.person_wrap').width();
var timer = null;
var pic_num = 2;
var lv = 1;		//存放关数
var tietou = []; //存放铁头人数的数组
var rnd_arr = [];   //存放徐峥随机数字的数组 取最后那个就是。
var tietou_num = 4;   //存放铁头个数
var timer_set = null;
var padd = 7;
var timer_txt = null;
var background_sound = document.getElementById('background_sound');
var music = document.getElementById('music');
var music_a = document.getElementById("music_a");


//倒计时
var TIME_LIMIT = 30.00;
var timestart = TIME_LIMIT;
var timeEnd = 0.00;

var bgsound = document.getElementById('bgsound');
var sound = document.getElementById('background_sound');

function timerFn() {
    window.find_success = false;
    $('#succ_sound')[0].pause();
    $('#false_sound')[0].pause();
    sound.pause();
    bgsound.src = window.base_resource_url + "/sound/daojishi.mp3";
    bgsound.play();

    clearInterval(timer);
    timer = setInterval(function () {
        timestart -= 0.01;
        timestart = timestart > timeEnd ? timestart : timeEnd;
        if (timestart == timeEnd) {
            clearInterval(timer);
            sound.play();
            $('.game_false_mengban').css("display", "block");
            bgsound.src = "";
        }
        timestart = timestart.toFixed(2);

        $("#time").html(timestart.split(".").join(":"));
    }, 10);
}

//没铁头时的页面
function fdd() {
    suipianFn();
    pic_num++;
}
// 有铁头时的页面
function createTietou() {
    creaDiv();
    tietou_append();
}

//生成包贝尔 然后徐峥替换一个的函数、
function creaDiv() {
    var rnd = Math.floor(Math.random() * (pic_num * pic_num));
    rnd_arr.push(rnd);
    var cont = '<div class="person_kuang"><img src="' + window.base_resource_url + '/img/baobei.png" alt=""></div>';
    var str = '';
    for (var i = 0; i < pic_num * pic_num; i++) {
        str += cont;
    }
    $('.person_wrap').empty();
    $('.person_wrap').append(str);
    $('.person_wrap img')[rnd].src = window.base_resource_url + "/img/xuzheng.png";
    $('.person_wrap img')[rnd].className = "xuzheng";
    var $kuang_width = $person_wrap_width - pic_num;
    $('.person_kuang').width(parseInt($kuang_width * 1 / pic_num));
}

$('.person_wrap').on(clickEvent, '.person_kuang img', function () {
    if ($(this).hasClass('xuzheng')) {
        lv++;
        bgsound.src = "";
        clearInterval(timer_txt);
        if (lv == 9) {
        }

        fdd();
    }
});
creaDiv();

//每关对应的碎片
var index = 0;
function suipianFn() {
    index++;
    $('.suipian_wrap').css("display", "block");
    clearInterval(timer);
    timer_set = setTimeout(function () {
        timerFn();
        $('.suipian_wrap').css("display", "none");
        change_title();
        clearInterval(timer_txt);
        if (lv == 5) {
            tietou_num = 4;
            pic_num = 5;
            createTietou();
            $('.person_kuang img').css('padding', "4px");
        }
        else if (lv == 7) {
            tietou_num = 5;
            pic_num = 6;
            createTietou();
            $('.person_kuang img').css('padding', "2px");
        } else if (lv == 9 && $('.suipian_wrap').css("display") == "none") {
            clearInterval(timer);
            sucss();
            bgsound.src = "";
            background_sound.src = window.base_resource_url + "/sound/bg.mp3";
            music.className = "music_js";
            music.style.WebkitAnimationPlayState = "running";
            music_a.src = window.base_resource_url + "/img/music_o.png";
        }
        else {
            creaDiv();
            padd--;
            $('.person_kuang img').css('padding', padd + "px");
        }

        if ($(window).height() <= 500) {
            if (lv == 2) {
                $('.person_kuang img').css('max-height', '70px');
            }
            if (lv == 3) {
                $('.person_kuang img').css('max-height', '50px');
            }
            if (lv == 4 || lv == 5) {
                $('.person_kuang img').css('max-height', '38px');
            }
            if (lv == 6 || lv == 7) {
                $('.person_kuang img').css('max-height', '32px');
            }
            if (lv == 8) {
                $('.person_kuang img').css('max-height', '28px');
            }
        }
    }, 3000);

    var stepmes = [
        ['像初恋一样手感的', '双2.5D弧面玻璃'],
        ['帮助你防火防盗', '防女友的眼球识别加密系统'],
        ['帮你省下单反钱的', '1300万像素镜头'],
        ['促进多巴胺分泌的', 'Hi-Fi音质耳放'],
        ['可以自动区分女汉子和男妹子的', '知性美颜系统'],
        ['快得能让时间变慢的', '八核1.7GHz处理器'],
        ['轻松抓拍多动症患者的', 'PDAF快速相应对焦系统'],
        ['duang duang duang效果的', 'Funtouch OS系统']
    ];
    if (index >= 1 && index <= 8) {
        $(".suipian_bg h3").html('你获得' + index + '/8碎片');
        $(".suipian_bg p").html(step_info[index - 1][0]);
        $(".suipian_bg span").html(step_info[index - 1][1]);
    }
    switch (index) {
        case 2:
            $(".suipian_pic").css("background-position", "-272px 4px");
            break;
        case 3:
            $(".suipian_pic").css("background-position", "-546px 4px");
            break;
        case 4:
            $(".suipian_pic").css("background-position", "2px 4px");
            break;
        case 5:
            $(".suipian_pic").css("background-position", "-135px 4px");
            break;
        case 6:
            $(".suipian_pic").css("background-position", "3px -129px");
            break;
        case 7:
            $(".suipian_pic").css("background-position", "-140px -129px");
            break;
        case 8:
            $(".suipian_pic").css("background-position", "-286px -129px");
            break;
    }

}
//头部切换标题
var tit_num = 0;
function change_title() {
    tit_num++;
    switch (tit_num) {
        case 1:
            $(".game_title").html("第二关 金星");
            break;
        case 2:
            $(".game_title").html("第三关 地球");
            break;
        case 3:
            $(".game_title").html("第四关 火星");
            break;
        case 4:
            $(".game_title").html("第五关 木星");
            break;
        case 5:
            $(".game_title").html("第六关 土星");
            break;
        case 6:
            $(".game_title").html("第七关 天王星");
            break;
        case 7:
            $(".game_title").html("第八关 海王星");
            break;
    }
}


// 生成铁头
function creaTietou() {
    var arr = [];
    for (var i = 0; i < (tietou_num + 1) * (tietou_num + 1); i++) {
        arr.push(i);
    }

    while (tietou.length < tietou_num) {
        var rand = Math.floor(Math.random() * (tietou_num + 1) * (tietou_num + 1));
        if (arr[rand] != -1 && arr[rand] != rnd_arr[rnd_arr.length - 1]) {
            tietou.push(rand);
            arr[rand] = -1;
        }
    }
}
//第五，第7关的时候插入铁头
function tietou_append() {
    if (tietou.length == 0) {
        creaTietou();
    } else {
        tietou.splice(0, tietou.length);
        creaTietou();
    }
    for (var i = 0; i < tietou.length; i++) {
        if (tietou[i] == rnd_arr[rnd_arr.length - 1]) {
            creaTietou();
            $('.person_wrap img')[tietou[i]].src = window.base_resource_url + "/img/tietou.png";
        }
        else {
            $('.person_wrap img')[tietou[i]].src = window.base_resource_url + "/img/tietou.png";
        }
    }
}

//点击碎片时 碎片消失的fn
$('.suipian_wrap').bind(clickEvent, function () {
    clearInterval(timer_set);
    timerFn();
    $('.suipian_wrap').css("display", "none");

    change_title();
    clearInterval(timer_txt);
    if (lv == 5) {

        tietou_num = 4;
        pic_num = 5;
        createTietou();
        $('.person_kuang img').css('padding', "4px");
    }
    else if (lv == 7) {
        tietou_num = 5;
        pic_num = 6;
        createTietou();
        $('.person_kuang img').css('padding', "2px");
    }
    else if (lv == 9 && $('.suipian_wrap').css("display") == "none") {
        sucss();
        bgsound.src = "";
        background_sound.src = window.base_resource_url + "/sound/bg.mp3";
        music.className = "music_js";
        music.style.WebkitAnimationPlayState = "running";
        music_a.src = window.base_resource_url + "/img/music_o.png";

        songs_bol = true;
    }
    else {
        $('.person_kuang').remove();
        creaDiv();
        padd--;
        $('.person_kuang img').css('padding', padd + 'px');

    }
    if ($(window).height() <= 500) {

        if (lv == 2) {
            $('.person_kuang img').css('max-height', '70px');
        }
        if (lv == 3) {
            $('.person_kuang img').css('max-height', '50px');
        }
        if (lv == 4 || lv == 5) {
            $('.person_kuang img').css('max-height', '38px');
        }
        if (lv == 6 || lv == 7) {
            $('.person_kuang img').css('max-height', '32px');
        }
        if (lv == 8) {
            $('.person_kuang img').css('max-height', '28px');
        }
    }
});

//文字逐个逐个显示
var worksarr = ["旺德福", "你已集齐徐峥分身", "vivo X5Pro碎片开始合体", "合体中", "..."];
var vivo_txt_wrap = document.getElementById('vivo_txt_wrap');
var timer_txt = null;

function running(num) {
    var i = 0;

    // alert(num);
    timer_txt = setInterval(function () {
        vivo_txt_wrap.innerHTML += worksarr[num].charAt(i);
        i++;
        if (i == worksarr[num].length) {
            clearInterval(timer_txt);
            vivo_txt_wrap.innerHTML += "<br>";
            running(num + 1);
        }

    }, 80)
    if (num == 5) {
        clearInterval(timer_txt);
    }

}
var workarr = ["旺德福", "你已集齐徐峥分身", "vivo X5Pro碎片开始合体", "合体中", "...", ""];
// var word = document.getElementById("word");
var num = 0;
function run() {
    var timers = setInterval(function () {
        if (num >= workarr.length - 1) {
            clearInterval(timers);
        }
        var inner = vivo_txt_wrap.innerHTML;
        vivo_txt_wrap.innerHTML = "";
        vivo_txt_wrap.innerHTML = inner + workarr[num] + "<br>";
        num++;
    }, 600);
}

//再试一次的点击框
$('.try_b span').bind(clickEvent, function () {
    $('.draw_mengban').css('display', 'none');
    $(".game_false_mengban").css("display", "none");
    game_try();
});

// 返回游戏点击框

$('.back_b span').bind(clickEvent, function () {
    vivo_txt_wrap.innerHTML = "";
    boli_none();
    $('.false_mengban').css("display", "none");
    $('.draw_mengban').css('display', 'none');
    $(".game_false_mengban").css("display", "none");
    $('.game_title').css("display", "block");
    $('.kuang_wrap').css("display", "block");
    $('#color_ribbon').css("display", "none");
    $('#vivo_txt_wrap').css('display', "none");
    $('.deb_wrap').css('display', "none");
    game_try();
    background_sound.src = "";
    $('.deb_one').css('display', 'none');
    $('.deb_two').css('display', 'none');
    $('.deb_three').css('display', 'none');
    $('.deb_four').css('display', 'none');
    $('.deb_five').css('display', 'none');
    $('.deb_six').css('display', 'none');
    $('.deb_seven').css('display', 'none');
    $('.deb_eight').css('display', 'none');
    $('.vivo_phone').css("display", "none");

    music.style.WebkitAnimationPlayState = "paused";
    music_a.src = window.base_resource_url + "/img/songs_p.png";
    songs_bol = false;
});


function fdd() {
    suipianFn();
    pic_num++;
}
// 有铁头时的页面
function createTietou() {
    $('.person_kuang').remove();
    // pic_num = 5;
    creaDiv();
    tietou_append();
}

function sucss() {
    window.find_success = true;
    window.score = TIME_LIMIT - timestart;
    clearInterval(timer);

    $('game_false_mengban').css('display', "none");
    $('.deb_wrap').css('display', "block");
    $("#vivo_txt_wrap").css("display", "block");
    $('.game_title').css("display", "none");
    $('.kuang_wrap').css("display", "none");
    setTimeout(function () {
        $('.deb_one').css("display", "block");
        $('.deb_one').addClass('.deb_one ani_one');
        $('.deb_two').css("display", "block");
        $('.deb_two').addClass('.deb_two ani_two');
        $('.deb_three').css("display", "block");
        $('.deb_three').addClass('.deb_three ani_three');
        $('.deb_four').css("display", "block");
        $('.deb_four').addClass('.deb_four ani_four');
        $('.deb_five').css("display", "block");
        $('.deb_five').addClass('.deb_five ani_five');
        $('.deb_six').css("display", "block");
        $('.deb_six').addClass('.deb_six ani_six');
        $('.deb_seven').css("display", "block");
        $('.deb_seven').addClass('.deb_seven ani_seven');
        $('.deb_eight').css("display", "block");
        $('.deb_eight').addClass('.deb_eight ani_eight');
        $("#vivo_txt_wrap").css("display", "none");
    }, 3500)
    run();


    setTimeout(function () {
        $('.deb_one').addClass('.deb_one animated fadeOut');
        $('.deb_two').addClass('.deb_one animated fadeOut');
        $('.deb_three').addClass('.deb_one animated fadeOut');
        $('.deb_four').addClass('.deb_one animated fadeOut');
        $('.deb_five').addClass('.deb_one animated fadeOut');
        $('.deb_six').addClass('.deb_one animated fadeOut');
        $('.deb_seven').addClass('.deb_one animated fadeOut');
        $('.deb_eight').addClass('.deb_one animated fadeOut');

        $('.vivo_phone').css("display", "block");
        $('.vivo_phone').addClass('.vivo_phone animated fadeIn');
    }, 7000)
}
// 再一次游戏的fn()
function game_try() {
    lv = 1;
    timestart = TIME_LIMIT;
    timerFn();
    tit_num = 0;
    pic_num = 2;
    index = 0;
    $('.person_kuang').remove();
    creaDiv();
    $(".game_title").html("第一关 水星");
}

function boli_none() {
    // $(".deb_one").css('display','none');
    // $(".deb_two").css('display','none');
    // $(".deb_three").css('display','none');
    // $(".deb_five").css('display','none');
    // $(".deb_six").css('display','none');
    // $(".deb_seven").css('display','none');
    // $(".deb_eight").css('display','none');
    $('.vivo_phone').css("display", "none");
    $('.deb_one').removeClass('.deb_one animated fadeOut');
    $('.deb_two').removeClass('.deb_one animated fadeOut');
    $('.deb_three').removeClass('.deb_one animated fadeOut');
    $('.deb_four').removeClass('.deb_one animated fadeOut');
    $('.deb_five').removeClass('.deb_one animated fadeOut');
    $('.deb_six').removeClass('.deb_one animated fadeOut');
    $('.deb_seven').removeClass('.deb_one animated fadeOut');
    $('.deb_eight').removeClass('.deb_one animated fadeOut');
}

//改变中奖框的 margin
if ($(window).height() <= 500) {
    if (lv == 1) {
        // alert("");
        $('.person_kuang img').css('max-height', '114px');
    }
}

//关闭背景音乐

var songs_bol = false;
music.style.WebkitAnimationPlayState = "paused";
$('#music').bind(clickEvent, function () {
    if (songs_bol == false) {
        background_sound.src = window.base_resource_url + "/sound/bg.mp3";
        music.className = "music_js";
        music.style.WebkitAnimationPlayState = "running";
        music_a.src = window.base_resource_url + "/img/music_o.png";

        songs_bol = true;
        // alert("停止")
    }
    else if (songs_bol == true) {
        music_a.src = window.base_resource_url + "/img/songs_p.png";

        music.style.WebkitAnimationPlayState = "paused";
        // $('#music').removeClass('music_js');
        background_sound.src = "";
        songs_bol = false;
        // alert("播放")

    }
})

window.onload = function () {
    var loading_mengban = document.getElementById('loading_mengban');
    var music = document.getElementById('music');
    var pic_load = ["/img/baobei.png", "/img/bg.jpg", "/img/xuzheng.png",
        "/img/chip1.png", "/img/chip2.png", "/img/chip3.png", "/img/chip4.png",
        "/img/chip5.png", "/img/chip6.png", "/img/chip7.png", "/img/chip8.png",
        "/img/color_yan.png", "/img/CSSatyr.png", "/img/game_info_bt.png",
        "/img/kuang_bg.png", "/img/one_guan_pic.png", "/img/one_pic1.png",
        "/img/one_pic2.png", "/img/one_pic3.png", "/img/person_kuang.png",
        "/img/tietou.png", "/img/vivo_mobile.png", "/img/xuzheng_kuang.png",
        "/img/xuzheng_succ_kuang.png", "/img/music_o.png", "/img/songs_p.png"];
    for (var i = 0; i < pic_load.length; i++) {
        pic_load[i] = window.base_resource_url + pic_load[i];
    }
    var n = 0;
    var not_called = 1;
    background_sound.src = "";
    for (var i = 0; i < pic_load.length; i++) {
        var loding_pic = new Image();
        loding_pic.src = pic_load[i];
        loding_pic.onload = function () {
            n++;
            if ((n / pic_load.length) > 0.8 && not_called) {
                not_called = 0;
                bgsound.play();
                loading_mengban.style.display = "none";
                timerFn();
            }

        }
    }
};
$(document).ready(function () {
    // 提交用户信息
    $('#refer').on(clickEvent, function () {
        if (window.sending) {
            return;
        }
        var tel = $('#phone_num').val(); //获取手机号
        var name = $('#name_person').val();
        //如果手机号码不能通过验证
        var tel_reg = /^1\d{10}$/;
        if (tel == "" || name == "") {
            my_notify("请正确填写您的信息");
            return;
        }
        else if (tel_reg.test(tel) == false) {
            my_notify("请重新输入正确的手机号码");
            return;
        }
        window.sending = true;
        $.ajax({
            url: '/index/save_user_info',
            type: 'post',
            dataType: 'json',
            data: {tel: tel, name: name},
            success: function (resp) {
                window.sending = false;
                if (resp.errcode != 0) {
                    my_notify(resp.errmsg);
                    return;
                }
                window._paq && window._paq.push(['trackEvent', 'custom', '中奖']);
                my_notify('提交成功', 3000);
                setTimeout(function () {
                    window.location.href = '/index/index';
                }, 3000);
            },
            error: function () {
                window.sending = false;
                my_notify('网络错误');
            }
        });
    });

    function choujiang() {
        $.ajax({
            url: '/index/get_prize',
            type: 'post',
            dataType: 'json',
            data: {score: window.score},
            success: function (resp) {
                if (resp.errcode != 0) {
                    my_notify(resp.errmsg);
                    return;
                }
                if (resp.data.gift == null) {
                    $('.false_mengban').css('display', 'block');
                    $('#false_sound')[0].play();
                } else {
                    var prize_name = resp.data.gift.name;
                    $('#color_ribbon').css("display", 'block');
                    $('.prize').html(prize_name);
                    $('.draw_mengban').css("display", "block");
                    $('#succ_sound')[0].play();
                }
                music.style.WebkitAnimationPlayState = "paused";
                music_a.src = window.base_resource_url + "/img/songs_p.png";
                songs_bol = false;
            },
            error: function () {
                $('.false_mengban').css('display', 'block');
                $('#false_sound')[0].play();
                music.style.WebkitAnimationPlayState = "paused";
                music_a.src = window.base_resource_url + "/img/songs_p.png";
                songs_bol = false;
            }
        });
    }

    //点击抽奖按钮时返回的礼品数值
    $('.draw_b').bind(clickEvent, function () {
        choujiang();
        $('#background_sound')[0].pause();
    });
});
$(document).ready(function () {
    //游戏说明文章关闭和显示
    $('.game_txt_b').bind(clickEvent, function () {
        $('.game_info_mengban').css('display', 'block');
        $('#game_info_wrap').css('display', 'block');
    });
    $('.game_two_b span').bind(clickEvent, function () {
        $('.game_info_mengban').css('display', 'block');
        $('#game_info_wrap').css('display', 'block');
    });
    $('#game_info_close').bind(clickEvent, function () {
        $('#game_info_wrap').css('display', 'none');
        $('.game_info_mengban').css('display', 'none');
    });


    //自定义滚动条
    var game_info = document.getElementById('game_info');
    var content = document.getElementById('content');
    var scroll = document.getElementById('scroll');
    var btn = document.getElementById('scrollbtn');
    var scrollH = game_info.clientHeight / content.offsetHeight * game_info.clientHeight;
    if (scrollH < 50) {
        scrollH = 50;
    }
    btn.style.height = scrollH + "px";

    function move() {        //滚动条对应文本运动封函数
        var scale = btn.offsetTop / (scroll.offsetHeight - btn.offsetHeight);
        content.style.top = -scale * (content.offsetHeight - game_info.clientHeight) + "px";
    }

    btn.ontouchstart = function (e) {       //点击滚动条事件
        var touch = e.touches[0];
        var dixY = touch.pageY - btn.offsetTop;
        document.ontouchmove = function (e) {
            var touch = e.touches[0];
            var y = touch.pageY - dixY;
            go(y);
            return false;
        };
        e.cancelBubble = true;
        document.ontouchend = function () {
            document.onmousemove = "";
        };
        return false;
    };
    content.ontouchstart = function (e) {  //点击文本事件
        var touch = e.touches[0];
        var dixY = touch.pageY;
        var bTop = btn.offsetTop;
        document.ontouchmove = function (e) {
            var touch = e.touches[0];
            var y = dixY - touch.pageY;
            btn.style.top = bTop + y + "px";
            if (btn.offsetTop < 0) {
                btn.style.top = 0;
            }
            if (btn.offsetTop > scroll.offsetHeight - btn.offsetHeight) {
                btn.style.top = scroll.offsetHeight - btn.offsetHeight + "px";
            }
            move();
            return false;
        };
        touch.cancelBubble = true;
        document.ontouchend = function () {
            document.ontouchmove = "";
        };
        return false;
    };
    function go(y) {     //判断超出范围封函数
        if (y < 0) {
            y = 0
        }
        if (y > game_info.clientHeight - btn.offsetHeight - 6) {
            y = game_info.clientHeight - btn.offsetHeight - 6;
        }
        btn.style.top = y + "px";
        move();
    }

    function wheelFn(obj, succFn) {      //鼠标滚轮事件

        if (window.navigator.userAgent.indexOf("Firefox") > 0) {
            obj.addEventListener("DOMMouseScroll", Fn, false);
        } else {
            obj.onmousewheel = Fn;
        }

        function Fn(e) {
            var e = e || window.event;
            var down;
            if (e.detail) {
                down = e.detail > 0;
            } else {
                down = e.wheelDelta < 0;
            }

            succFn.call(obj, down);

            if (e.preventDefault) {
                e.preventDefault();
            }
            return false;
        }
    }

    wheelFn(game_info, function (down) {
        if (down) {
            var y = btn.offsetTop + 10;
            go(y);
        } else {
            var y = btn.offsetTop - 10;
            go(y);
        }
    })
});
