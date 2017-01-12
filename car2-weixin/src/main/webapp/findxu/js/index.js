$(function() {
		var imgSrc = ["img/loading_bg.png", "img/loading_xuzheng.png", "img/loading_txt.png","img/word_bg.jpg","img/music_on.png","img/music_off.png","img/up.png","img/super_head1.png"];
		 for (var i = 1; i < 9; i++) {
		 	imgSrc.push('img/chip' + i + '.png');
		 };
		 for (var i = 2; i < 12; i++) {
		 	imgSrc.push('img/star' + i + '.png');
		 };
		var loaded = 0;
		var percent=0;
		for (var i = 0; i < imgSrc.length; i++) {
			var img = new Image();
			img.onload = function() {
				loaded++;
				percent = parseInt(loaded / imgSrc.length)

					$('.page1 .txt').css({
						animation:"lodaing 10s linear infinite"
					})
					if (percent == 1) {
						$('.page1').css('display', 'none')
						$('.page2').css('display', 'block');
						bodyfly();
                        run();
					}
			}
			img.src = imgSrc[i];
		}
        function run() {
			$("#playtxtsound")[0].play();
            var $word = $('#word');
            var workarr = ["公元9025年", "外星人为了争夺", "封印在vivo手机中的神秘能量",
                "发起宇宙战乱", "超人徐峥为了保卫神秘能量", "带着手机来到浩瀚宇宙中",
                "分身成为8个自己", "分别保卫8块手机碎片", "消失在太阳系的八大行星中",
                "据说找齐徐峥的8个分身", "就能启动神秘能量保护地球", "...", ""];
            var num = 0;
            var timers = setInterval(function () {
                if (num >= workarr.length - 1) {
                    //$('#playtxtsound').addClass('music_finish').attr('src', '');
                    $('#playtxtsound')[0].pause();

                    clearInterval(timers);
                    setTimeout(function () {
                        $word.addClass('word');
                        setTimeout(function () {
                            $word.hide();
                            $('#star2').css({left: 470, top: 320});
                            $('#star3').css({left: 380, bottom: 170});
                            $('#star5').css({left: 100});

                        }, 1000);
						$('#super').attr('class', 'super');
                        setTimeout(function () {
                            $('#phone').attr('class', 'phone');
                            setTimeout(function () {
                                $('#super').hide();
                                chippy();
								setTimeout(function(){
									$('.upa').show();
								},7000)
                            }, 1000)
                        }, 5000);
                    }, 1000);
                    return;
                }
                $word.html($word.html() + workarr[num] + "<br>");
                num++;
            }, 600);
        }

		// 超人
		function bodyfly(){
			setTimeout(function () {
				$("#subody")[0].src="img/super_body2.png";
				setTimeout(function () {
					$("#subody")[0].src="img/super_body3.png";
					setTimeout(function () {
						$("#subody")[0].src="img/super_body1.png";
						bodyfly();
					}, 300);
				}, 300);
			}, 300);
		}
		bodyfly();
	})
	function chippy() {
		var chips=$(".phonebox div");
		var heads=$(".phonebox div img:nth-child(2)");
		var lis=$(".page2 ul li");
		$("#star2,#star3,#star4,#star5").css("opacity",0);
		for (var i = 0; i < chips.length; i++) {
			chips[i].className="chip"+(i+1);
			heads[i].className="head";
		}
		setTimeout(function () {
			for (var i = 0; i < lis.length; i++) {
                j = i + 1;
                lis[i].style.opacity = "1";
            }
			if (j>7) {
				return;
			}
		},4000);

	}

	$("#musicOn").on("click",function(){
		$("#musicOn").css("display","none");
		$("#musicOff").css("display","block");
		$("audio").attr("src","");
	})
	$("#musicOff").on("click",function(){
		$("#musicOn").css("display","block");
		$("#musicOff").css("display","none");
		$("#bgsound").attr("src","sound/bg.mp3");
		$("#playtxtsound").attr("src","sound/playtxt.mp3");
		if (!$('#playtxtsound').hasClass('music_finish')) {
            $('#playtxtsound').attr('src',"sound/playtxt.mp3");
            $('#playtxtsound')[0].play();
        }
	})

	$('.upa').on('click touchstart touchmove', function () {
		setTimeout(function () {
            window.location.href = "game.html";
        }, 500)
    });
    $('body').on('touchmove', function (event) {
        event.preventDefault();
    });
