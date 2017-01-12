$(function() {

		var imgSrc = ["img/frist.png", "img/bg.jpg", "img/kuang_bg.png","img/person_kuang.png","img/one_guan_pic.png","img/tou.png","img/star.png","img/one_pic3.png","img/weistar.png","img/music_off.png","img/game_info_bt.png","img/one_guan_pic.png","img/tou.png","img/xuzheng_kuang.png","img/one_guan_pic.png","img/chip2.png","img/vivo_mobile.png","img/xuzheng_kuang.png","img/xuzheng_succ_kuang.png"];
		for (var i = 1; i < 9; i++) {
		   imgSrc.push('img/chip' + i + '.png');
		};
		var loaded = 0;
		var percent=0;
		for (var i = 0; i < imgSrc.length; i++) {
			var img = new Image();
			img.onload = function() {
				loaded++;
				percent = parseInt(loaded / imgSrc.length);
				$(".boxt").html("去往行星途中，请稍后......")
					if (percent == 1) {
						$('.boxt').css('display', 'none');
						$('.box1').css('display', 'block');
						$("#bgsound")[0].play();

					}
			}
			img.src = imgSrc[i];
		}

		//倒计时time
		var time = 30.00;
		var timestart = time;
		var timeEnd = 0.00;
		var timer=null;
		function timerun() {
		    clearInterval(timer);
		    timer = setInterval(function () {
		        timestart -= 0.01;
		        timestart = timestart > timeEnd ? timestart : timeEnd;
		        if (timestart == timeEnd) {
		            clearInterval(timer);
                    $("#out")[0].play();
		            $('.timefibox').css("display", "block");
		            $("#bgsound")[0].pause();
		        }
		        timestart = timestart.toFixed(2);

		        $(".kuangf .time").html(timestart.split(".").join(":"));
		    }, 10);
		}
		timerun();
		//点击播放背景声音
		var flagmusic=false;
		$("#music").on("click",function(){
			if (flagmusic==false) {
				$("#musicbga").attr("src","img/music_on.png");
				$("#music").css("animation-play-state","running");
				$("#background_sound")[0].play();
				flagmusic=true;
			}else {
				$("#musicbga").attr("src","img/music_off.png");
				$("#music").css("animation-play-state","paused")
				$("#background_sound")[0].pause();
				flagmusic=false;
			}

		})



		//第五，七关铁头随机
		function randoms(min,max,m1){
			var res=parseInt(Math.random()*(max-min)+min)
			if(res==m1){
				res=randoms(min,max,m1);
			}
			return res;
		}
		// 寻找徐峥
		var m=0,random;
		var max;
		function find() {
			$(".kuangf1").empty();
			for (var i = 0; i < 2+m; i++) {
				for (var j = 0; j < 2+m; j++) {
					var divs=document.createElement('div');
					divs.className="item";
					// 一个div的宽度  570是框的宽度
					var w=570/(2+m);
					var h=w;
					divs.style.width=w+"px";
					divs.style.height=h+"px";
					divs.style.lineHeight=h+"px";
					$(".kuangf1").append(divs);
				}
			}
			var divs1=$(".kuangf1 div");
			max=divs1.length;
			random=parseInt(Math.random()*divs1.length);
			if (titleindex==5) {
				var array=suitouhui(4);
				toutianC();

			}else if (titleindex==7) {
				var array=suitouhui(5);
				toutianC();

			}else  {
				for (var i = 0; i < divs1.length; i++) {
					divs1[i].innerHTML="<img src='img/baobei.png' />"
					divs1[random].innerHTML="<img class='xu' src='img/xuzheng.png' />";

				}
			}

		function toutianC(){
			for (var i = 0; i < divs1.length; i++) {
				divs1[i].innerHTML="<img src='img/baobei.png' />"
				divs1[random].innerHTML="<img class='xu' src='img/xuzheng.png' />";
				for (var j = 0; j < array.length; j++) {
					divs1[array[j]].innerHTML="<img src='img/tietou.png' />"
				}

			}
		}
	}
	find();

	// 选择对了
	var titleindex=1;//关数
	var timeOut=null;
	$(".kuangf1").on("click",".xu",function(ev){
		$("#bgsound")[0].pause();
		chipsui ();
		timeOut=setTimeout(function(){
			findf();
			timerun();

		},3000)

	})
	function findf(){
		$(".chipbox").css("display","none");
		$("#bgsound")[0].play();
		m++;
		titleindex++;
		if (titleindex==5) {
			m=3;
		}
		if (titleindex==6||titleindex==7) {
			m=4
		}
		if (titleindex==8) {
			m=5;
		}
		if (m<6) {
			find();
			$(".frist img").attr("src","img/"+(titleindex)+".png")
		}else {
			clearInterval(timer);
			$(".box1").css("display","none");
            $(".timefibox").css("display","none");
            $("#out")[0].pause();
			$(".box2").css("display","block");
			wintxt();
			

		}
	}


	// 随机铁头位置
	function suitouhui(a) {
		var array=[];
			while (array.length<a) {
				var random1 =randoms(0,max,random);

				var flag=false;
				for (var i = 0; i < array.length; i++) {
					if (random1==array[i]) {
						flag=true;
					}
				}
				if (flag==false) {
					array.push(random1)
				}

			}
		return array;
	}
	//过关后的信息
	var index=0;
	function chipsui () {
		clearInterval(timer);
		index++;
		$(".chipbox").css("display","block");
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
		   if (index>=1&&index<=8) {
			   $(".chips h3").html('你获得'+(index)+'/8碎片');
			   $(".chips p").html(stepmes[index-1][0]);
			   $(".chips span").html(stepmes[index-1][1])
		   }
		   switch (index) {
			   case 1:
				   $(".chipfen").css("background-position", "-452px -216px");
				   break;
	           case 2:
	               $(".chipfen").css("background-position", " 0px -216px");
	               break;
	           case 3:
	               $(".chipfen").css("background-position", "-216px -216px");
	               break;
	           case 4:
	               $(".chipfen").css("background-position", "-648px 0");
	               break;
	           case 5:
	               $(".chipfen").css("background-position", "-864px 0");
	               break;
	           case 6:
	               $(".chipfen").css("background-position", "0px 0px");
	               break;
	           case 7:
	               $(".suipian_pic").css("background-position", "-216px 0");
	               break;
	           case 8:
	               $(".suipian_pic").css("background-position", "-432px 0");
	               break;
	       }
	}
	//闯关信息点击
	$(".chips").bind("click",function(){

		clearTimeout(timeOut);
		findf();
		$(".chipbox").css("display","none");
		timerun();
	})
	// 闯关成功后
	function wintxt(){
		$("#musicbga").attr("src","img/music_on.png");
		$("#music").css("animation-play-state","running");
		$("#background_sound")[0].play();
		var wintxt=["旺德福","你已集齐徐铮分身","vivo X5pro碎片开始合体","合体中",
		"..."]
		var wintxtnum=0;
		var timer1=setInterval(function () {
			if (wintxtnum>=wintxt.length-1) {
				clearInterval(timer1);
			}
			$(".wintxt").html($(".wintxt").html()+wintxt[wintxtnum]+"<br>");
			wintxtnum++;
		}, 600);

		setTimeout(function(){
			$(".box2").css("display","none");
			$(".box3").css("display","block");
			setTimeout(function(){
				$(".box3 .vivo").css({
					"animation":"vivochuxian 1s ease alternate",
					"animation-fill-mode": "forwards",
				})

			},4000)
		},3500)


	}

	//点击游戏说明
	$(".gamemes span").on("click",function(){
		console.log("ss");

		$(".gamesbox").css("display","block");
		var myScroll1 = new IScroll("#gamestxtk", {
				scrollbars: 'true',
				hScroll: false,
				vScroll: false,
				bounce: false,
				scrollbars: true,
				checkDOMChanges: true,
				iScrollBothScrollbarsH:true,
				HWCompositing:true,
				interactiveScrollbars:true,
				fadeScrollbars:false,
		});
		$("#gamestxtk .iScrollVerticalScrollbar").css({
		    "background": "#58bedd",
			"right":"6px",
		    "overflow": "visible",
		})
		$(".gamecontent").width(440);
		$("#gamestxtk .iScrollIndicator").css({
			"border-radius": "6px",
		    "background": "white",
		    "width": "13px",
		    "left":"-3px",
		})
	})
	// 点击再试一次
	$(".try span").on("click",function(){
		$(".timefibox").css("display","none");
		gametry();
	})
	// 关闭游戏信息
	$("#close").on("click",function(){
		$(".gamesbox").css("display","none");

	})
	function gametry(){
		titleindex=1;
		index=0;
		m=0;
		time = 30.00;
		timestart = time;
		timeEnd = 0.00;
		$(".item").remove();
		find();
		timerun();
		$("#bgsound")[0].play();
		$(".frist img").attr("src","img/frist.png");

	}
	// 提交信息
	$(".submit span").on("click",function(){
        console.log("ss");
		var names=$("#names").val();
		var tel=$("#tel").val();
		$.ajax({
		            type: "GET",
		            url: "http://findxu.applinzi.com/findxu/php/data.php",
		            data: {
		                action: "add",
		                names: names,
		                tel: tel,
		            },
		            dataType: "json",
		            success: function (obj) {
		                if (obj.err == 0) {
		                    alert("提交成功");
		                    // 清空内容
							$("#names").val("");
							$("#tel").val("");
							window.location.href="index.html"

		                }
		            }

		        });
	})
    //点击抽奖
    $(".choujiang span").on("click",function(){
		var pricerandom=parseInt(Math.random()*11+1);
		$(".choujieguo").css("display","block");
		if (pricerandom>3) {
            
			$(".choujieguo .cjk").css("display","block");
            $("#losewin")[0].play();
            

		}else {
			$(".price").css("display","block");
			var array=["vivo X5pro一台","港囧电影票一套","vivo充电宝一个","vivo耳机一个","徐峥或赵薇签名照一张"];
			var price=parseInt(Math.random()*5);
            var str=array[price];

			$(".jiangpin").html(str);
            $("#winprice")[0].play();
		}
	})
    
    //点击返回游戏
	$(".returns span").on("click",function(){
		$(".choujieguo").css("display","none");
		$(".choujieguo .cjk").css("display","none");
		$(".box3").css("display","none");
		$(".box1").css("display","block");
        $(".timefibox").css("display","none");
		gametry();
		$(".wintxt").empty();
	})
   
   
	



})
