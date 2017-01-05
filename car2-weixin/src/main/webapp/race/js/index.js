
$("#startbg")[0].play();
$("#startbg")[0].pause();
$("#gameMusic")[0].play();
$("#gameMusic")[0].pause();
$("#boom")[0].play();
$("#boom")[0].pause();
$("#game_over")[0].play();
$("#game_over")[0].pause();
$("#look_rank")[0].play();
$("#look_rank")[0].pause();
var nicknames=null;
var mingcis=1;
var animateRuning=null;
var weixinAppId = "wxce8eb11c51670a1d";
var oauthCallbackUrl = "http%3A%2F%2Fcdn4dev.haoduocheyou.com%2Fweixin2%2Fweixin%2Foauth";
var scope = (typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType;
$.ajax({
	type: "get",
	url: "../user/current",
	dataType: "json",
	success: function(obj) {
			gamestart();
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
		if (XMLHttpRequest.status==403) {
			window.location.href= "https://open.weixin.qq.com/connect/oauth2/authorize?" +
			"appid=" + weixinAppId +"&redirect_uri=" + oauthCallbackUrl +"&response_type=code" +
			"&scope=snsapi_userinfo" + //+ ((typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType) +
			"&state=" + encodeURIComponent(window.location.href) +
			"#wechat_redirect";
		}

	}
})
function gamestart() {
	var allImg = ["image/arrom.png","image/cheyou.png","image/home-bg.png","image/start.png","image/left.png","image/right.png","image/logo.gif","image/blueKart.png","image/oil.png","image/sores-bg.png","image/sore-bg.png","image/obstacle.png","image/kill_boom.png","image/share.png","image/share1.png","image/game-bg.png","image/game-over.png","image/replay.png","image/share-bg.png","image/sore-bg.png","image/sores-bg.png","image/countdown.png","image/logo.png","image/redKart.png","image/logos.png","image/play.png","image/stop.png","image/xieleft.png","image/tixingbg.png"];
	var loadOver = [];
	loadOver = loadImg(allImg,function(){
		$(".loading").hide();
		home();
	})

	function loadImg(arr,fn){
		var arr1 = [];
	   	var index = 0;
	    var arr2 = [];
	    for(var i=0; i<arr.length; i++){
	    	var imgObj = new Image();
	    	imgObj.src = arr[i];
	    	imgObj.index = i;
	    	imgObj.onload = function(){
				index++;
				$("#loading .text p").eq(1).html(Math.ceil(index/allImg.length*100)+'%');
				$("#loading .load_wrap .loadPer").width(Math.ceil(index/allImg.length*100)+'%');
	    		arr1.push(this);
	    		if(index>arr.length-1){
	    			for(var i=0; i<arr1.length;i++){
	    				for(var j=0; j<arr1.length; j++){
	    					if(arr1[j].index == i){
	    						arr2.push(arr1[j]);
	    					}
	    				}
	    			}
	    			if(fn){
	    				fn();
	    			}
	    		}
	    	}
	    }
	    return arr2;
	}
	function home () {
		$(".home").show();
		var homede="超过一百万人在玩的极速前进最新版“车友飙车”，请你来当主角。";
		sharepage(homede);
		$("#startbg")[0].play();
	}
	var frameNum=0;//帧数
	var frameNums=0;
	var scoreNum = 0;//分数
	var distance=0;//距离
	var monsters = [];
	var carmonsters = [];
	var createMonsterSpeed = 60;
	var monsterMoveSpeed = 3;
	var coxspeed=monsterMoveSpeed-2;
	var removeBol = false;
	var num=3;

	function countdown() {
		$(".countdown").show();
		$(".count"+num).show();
		var timer=setInterval(function(){
			num--;
			if (num<1) {
				clearInterval(timer);
				$(".countdown").hide();
			}else {
				$(".counts").hide();
				$(".count"+num).show();
			}
		},1000)
	}
	var mutes=true;
	$(".homesound").on('click',function () {
		$(".homesound").hide();
		$(".mute").show();
		$("#startbg")[0].pause();
		mutes=false;
	})
	$(".mute").on('click',function () {
		$(".homesound").show();
		$(".mute").hide();
		mutes=true;
	})
	$(".start").on('click',function () {
		$(".home").hide();
		$("#startbg")[0].pause();
		$(".game").show();
		$(".game_introdute").show();
		$(".countdown").show();
		$(".tixingbg").show();
	})
	$(".sure").on('click',function () {
		$(".game_introdute").hide();
		countdown();
		setTimeout(function () {
			if (mutes==true) {
				$("#gameMusic")[0].play();
			}else {
				$("#gameMusic")[0].pause();
			}
			$(".playimg").show();
			$(".stopimg").hide();
		},3000)
		game();
		$(".tixingbg").hide();
	})

	var canvas1=document.getElementById("canva1")
	var context = canvas1.getContext("2d");
	var body = document.getElementsByTagName("body")[0];
	canvas1.width = body.offsetWidth/2;
	canvas1.height = body.offsetHeight;

	var canvas2=document.getElementById("canva2")
	var context2 = canvas2.getContext("2d");
	canvas2.width = body.offsetWidth/2;
	canvas2.height = body.offsetHeight;

	var canvas3=document.getElementById("canvas")
	var context3 = canvas3.getContext("2d");
	canvas3.width = body.offsetWidth;
	canvas3.height = 54;

	function gamedraw() {
		var bgH = canvas1.height/canvas1.width*640;
		var bgImg = {
			y:0,
			draw:function (){
				context.drawImage(loadOver[4],0,this.y,canvas1.width,bgH);
				context.drawImage(loadOver[4],0,this.y-bgH,canvas1.width,bgH);
			},
			draw1:function (){
				context2.drawImage(loadOver[5],0,this.y,canvas2.width,bgH);
				context2.drawImage(loadOver[5],0,this.y-bgH,canvas2.width,bgH);
			},
			move:function (){
				this.y+=2;
				distance+=2;
				if (this.y>=bgH){
					this.y = 0;
				}
			}
		}
		var heroW = 36;
		var heroH = 66.4;
		var hero = {
			w:heroW,
			h:heroH,
			drawX:canvas1.width/4-heroW/2,
			drawY:canvas1.height-heroH-10,
			draw:function(){
				context.drawImage(loadOver[23],this.drawX,this.drawY,this.w,this.h);

			}
		}

		var carW = 36;
		var carH = 66.4;
		var car = {
			w:carW,
			h:carH,
			drawX:canvas2.width/4-carW/2,
			drawY:canvas2.height-carH-10,
			draw:function(){
				context2.drawImage(loadOver[7],this.drawX,this.drawY,this.w,this.h);
			}
		}
		var scoreW = canvas.width;
		var scoreH = canvas.height;
		var score = {
			w:scoreW,
			h:scoreH,
			draw:function(){
				context3.drawImage(loadOver[9],0,0,this.w,this.h);
			}
		}

		var scoreW = 100;
		var scoreH = 42;
		var score1 = {
			w:scoreW,
			h:scoreH,
			draw:function(){
				context3.drawImage(loadOver[10],5,4,this.w,this.h);
			},
			draw1:function(){
				context3.drawImage(loadOver[10],105,4,this.w,this.h);
			},
			draw2:function(){
				context3.drawImage(loadOver[10],205,4,this.w,this.h);
			},

		}
		function drawScore() {
			context3.beginPath();
			context3.fillStyle="white";
			context3.font="12px";
			if(scoreNum<10){
				var shift = 3;
			}else if(scoreNum<100){
				var shift = 6;
			}else if(scoreNum<1000){
				var shift = 9;
			}else if(scoreNum<10000){
				var shift = 12;
			}else if(scoreNum<100000){
				var shift = 15;
			}
			context3.fillText("距离：",20,30);
			context3.fillText(distance+"m",55,30);
			context3.fillText("速度：",120,30);
			context3.fillText(coxspeed+"mph",155,30);
			context3.fillText("奖励：",220,30);
			context3.fillText(scoreNum,255,30);
		}

	}
//
	function game() {
		var bgH = canvas1.height/canvas1.width*640;
		var bgImg = {
			y:0,
			draw:function (){
				context.drawImage(loadOver[4],0,this.y,canvas1.width,bgH);
				context.drawImage(loadOver[4],0,this.y-bgH,canvas1.width,bgH);
			},
			draw1:function (){
				context2.drawImage(loadOver[5],0,this.y,canvas2.width,bgH);
				context2.drawImage(loadOver[5],0,this.y-bgH,canvas2.width,bgH);
			},
			move:function (){
				this.y+=2;
				distance+=2;
				if (this.y>=bgH){
					this.y = 0;
				}
			}
		}
		//logo对象------------------------------------
		var heroW =36;
		var heroH = 66.4;
		var hero = {
			w:heroW,
			h:heroH,
			drawX:canvas1.width/4-heroW/2,
			drawY:canvas1.height-heroH-10,
			draw:function(){
				context.drawImage(loadOver[23],this.drawX,this.drawY,this.w,this.h);

			}
		}

		// che对象
		var carW = 36;
		var carH = 66.4;
		var car = {
			w:carW,
			h:carH,
			drawX:canvas2.width/4-carW/2,
			drawY:canvas2.height-carH-10,
			draw:function(){
				context2.drawImage(loadOver[7],this.drawX,this.drawY,this.w,this.h);
			}
		}
		//logo移动限制---------------------------------
		var limitX = 0.135*canvas1.width;
		function heroMoveLimit(obj,obj1){
			if(obj1.drawX<=limitX){
				obj1.drawX = limitX;
			}else if(obj1.drawX>=obj.width-obj1.w-limitX){
				obj1.drawX = obj.width-obj1.w-limitX;
			}else if(obj1.drawY>=obj.height-obj1.h){
				obj1.drawY = obj.height-obj1.h;
			}else if(obj1.drawY<=0){
					obj1.drawY = 0;
				}
		}
		//奖励对象
		function Monster(monster){
			this.w = monster.w;
			this.h = monster.h;
			this.img = monster.img;
			var monsterdrawxR = randFn(0,2);
			var monsterdrawxArr = [0.170,0.570];
			this.drawX = monsterdrawxArr[monsterdrawxR]*canvas1.width;
			this.drawY = -monster.h;
			this.score = monster.score;
			this.speed = monsterMoveSpeed;
			this.survival = true;
		}
		Monster.prototype.draw = function(){
			context.drawImage(this.img,this.drawX,this.drawY,this.w,this.h);

		}
		Monster.prototype.move = function(){
			this.drawY+=this.speed;
		}
		Monster.prototype.clear = function(){
			if (this.drawY>=canvas1.height){
				for (var i=0; i<monsters.length; i++){
					if (this == monsters[i]){
						monsters.splice(i,1);
						return true;
					}
				}
			}
		}
		Monster.prototype.die = function(){
			if(!this.survival){
				if (this.score) {
					var boom = new Boom();
					boom.drawX = hero.drawX+hero.w;
					boom.drawY = hero.drawY;
					boom.score = this.score;
					boom.draw();
				}else {
					context.drawImage(loadOver[12],this.drawX*0.95,this.drawY*0.95,50,51);

				}
			}
		}
		var flag=false;
		function createMonster() {// 创建奖励
			if (frameNum%createMonsterSpeed==0) {
			var monsterR=randFn(1,30);
			if (monsterR>=0&&monsterR<=26) {//礼物
					var monster={};//存放每一个monster的信息
					monster.w=37;
					monster.h=36;
					monster.img=loadOver[8];
					monster.score=10;
					flag=true;

				}else {
					if (flag==true){
						var monster = {};
						monster.w = 29;
						monster.h = 39;
						monster.img = loadOver[11];
						flag=false;
					}else {
						var monster={};//存放每一个monster的信息
						monster.w=37;
						monster.h=36;
						monster.img=loadOver[8];
						monster.score=10;
						flag=true;
					}
				}
				var monsterObj=new Monster(monster);
				monsters.push(monsterObj);
			}
		}
		function drawMonster() {
			//绘制奖励
			for (var i = 0; i < monsters.length; i++) {
				monsters[i].move();
				monsters[i].draw();
				var bol = monsters[i].clear();
				if(!bol){
					var monsterBol = collide(monsters[i],hero);
					if(monsterBol){
						scoreNum += monsters[i].score;
						removeBol = true;
						monsters[i].survival = false;
						var dieBol = monsters[i].die();
						if (monsters[i].score) {
							monsters.splice(i,1);
							if (mutes==true) {
								$("#boom")[0].play();
							}else {
								$("#boom")[0].pause();
							}
						}else {
							gameOver();
							if (mutes==true) {
								$("#game_over")[0].play();
							}else {
								$("#game_over")[0].pause();
							}

						}
					}
				}
				if(bol||removeBol){
					i--;
					removeBol = false;
				}
			}
		}
		//另一个赛道
		function carMonster(monster){
			this.w = monster.w;
			this.h = monster.h;
			var monsterdrawxR = randFn(0,2);
			var monsterdrawxArr = [0.170,0.570];
			this.drawX = monsterdrawxArr[monsterdrawxR]*canvas2.width;
			this.drawY = -monster.h;
			this.score = monster.score;
			this.speed = monsterMoveSpeed;
			this.survival = true;
			this.img = monster.img;
		}
		carMonster.prototype.draw = function(){
			context2.drawImage(this.img,this.drawX,this.drawY,this.w,this.h);

		}
		carMonster.prototype.move = function(){
			this.drawY+=this.speed;
		}
		carMonster.prototype.clear = function(){
			if (this.drawY>=canvas2.height){
				for (var i=0; i<carmonsters.length; i++){
					if (this == carmonsters[i]){
						carmonsters.splice(i,1);
						return true;
					}
				}
			}
		}
		carMonster.prototype.die = function(){
			if(!this.survival){
				if (this.score) {
					var boom = new Boom();
					boom.drawX = car.drawX+car.w;
					boom.drawY = car.drawY;
					boom.score = this.score;
					boom.draw();
				}else {
					context2.drawImage(loadOver[12],this.drawX*0.95,this.drawY*0.95,50,51);

				}
			}
		}
		var flags=false;
		function createcarMonster() {// 创建奖励
			if (frameNum%createMonsterSpeed==0) {
				var monsterR=randFn(10,40);
			if (monsterR>=13&&monsterR<=37) {//礼物
					var monster={};//存放每一个monster的信息
					monster.w=37;
					monster.h=36;
					monster.img=loadOver[8];
					monster.score=10;
					flags=true;
				}else {
					if (flags==true){
						var monster = {};
						monster.w = 29;
						monster.h = 39;
						monster.img = loadOver[11];
						flags=false;
					}else {
						var monster={};//存放每一个monster的信息
						monster.w=37;
						monster.h=36;
						monster.img=loadOver[8];
						monster.score=10;
						flags=true;
					}

				}
				var monsterObj=new carMonster(monster);
				carmonsters.push(monsterObj);
			}
		}
		function drawcarMonster() {
			for (var i = 0; i < carmonsters.length; i++) {
				carmonsters[i].move();
				carmonsters[i].draw();
				var bol = carmonsters[i].clear();
				if(!bol){
					var monsterBol = collide(carmonsters[i],car);
					if(monsterBol){
						scoreNum += carmonsters[i].score;
						removeBol = true;
						carmonsters[i].survival = false;
						var dieBol = carmonsters[i].die();
						if (carmonsters[i].score) {
							carmonsters.splice(i,1);
							if (mutes==true) {
								$("#boom")[0].play();
							}else {
								$("#boom")[0].pause();
							}
						}else {
							gameOver();
							if (mutes==true) {
								$("#game_over")[0].play();
							}else {
								$("#game_over")[0].pause();
							}
						}
					}
				}
				if(bol||removeBol){
					i--;
					removeBol = false;
				}
			}
		}
		//另外一个赛道
		// 碰撞检测
		function collide(obj1,obj2) {
			var l1=obj1.drawX;
			var r1=l1+obj1.w;
			var t1=obj1.drawY;
			var b1=t1+obj1.h;

			var l2=obj2.drawX;
			var r2=l2+obj2.w;
			var t2=obj2.drawY;
			var b2=t2+obj2.h;
			if (r1>l2&&l1<r2&&b1>t2&&t1<b2) {
				return true;
			}else {
				return false;
			}
		}
		function Boom() {
			this.drawX=0;
			this.drawY=0;
		}
		Boom.prototype.draw=function () {
			context.fillStyle="white";
			context.font="30px";
			context.fillText("+"+this.score,this.drawX,this.drawY);
		}
		// 成绩背景
		var scoreW = canvas.width;
		var scoreH = canvas.height;
		var score = {
			w:scoreW,
			h:scoreH,
			draw:function(){
				context3.drawImage(loadOver[9],0,0,this.w,this.h);
			}
		}

		var scoreW = 100;
		var scoreH = 42;
		var score1 = {
			w:scoreW,
			h:scoreH,
			draw:function(){
				context3.drawImage(loadOver[10],5,4,this.w,this.h);
			},
			draw1:function(){
				context3.drawImage(loadOver[10],105,4,this.w,this.h);
			},
			draw2:function(){
				context3.drawImage(loadOver[10],205,4,this.w,this.h);
			},

		}
		//绘制分数
		function drawScore() {
			context3.beginPath();
			context3.fillStyle="white";
			context3.font="12px";
			if(scoreNum<10){
				var shift = 3;
			}else if(scoreNum<100){
				var shift = 6;
			}else if(scoreNum<1000){
				var shift = 9;
			}else if(scoreNum<10000){
				var shift = 12;
			}else if(scoreNum<100000){
				var shift = 15;
			}
			context3.fillText("距离：",20,30);
			context3.fillText(distance+"m",55,30);
			context3.fillText("速度：",120,30);
			context3.fillText(coxspeed+"mph",155,30);
			context3.fillText("奖励：",220,30);
			context3.fillText(scoreNum,255,30);
		}
		// 达到一定的分数改变速度
		function changeSpeed() {
			if (frameNums%60==0) {
				monsterMoveSpeed+=0.05;
			}
			if (frameNums%600==0) {
				coxspeed+=0.5;
				if (createMonsterSpeed>9) {
					createMonsterSpeed-=9;
				}else {
					createMonsterSpeed=9
				}

			}

		}
		//游戏结束
		var gameOverBol=true;
		function gameOver() {
			ranges(distance);
			monsters=[];
			carmonsters = [];
			gameOverBol=false;
			updateNum();
		}
		function updateNum() {
			$(".gameover").show();
			$("#gameMusic")[0].pause();
			$(".distance").html("距离："+distance+"m");
		}
		function ranges(dis) {
			$.ajax({
				type:"get",
				url:"/weixin2/game/break",
				data:{
					game:'game',
					point:dis
				},
				dataType: "json",
				success:function(obj){
					if (obj.content == true) {
						$(".norecord").hide();
						$(".recordBreak").show();
					}else {
						$(".norecord").show();
						$(".recordBreak").hide();
					}
					rankAll(dis);
				}
			});
		}
		function rankAll(dist) {
			$.ajax({
				type:"get",
				url:"/weixin2/game/rank",
				data:{
					game:'game',
					point:dist
				},
				dataType: "json",
				success:function(obj){
					if ((obj.rank+1)>3) {
						$(".user .mingci").html(obj.rank+1)
					}else  {
						$(".user .mingci").css({
							"width": "35px",
							"height": "54px",
							"background": "url(image/0"+(obj.rank+1)+".png) no-repeat",
							"background-size": "100% 100%",
							"margin-top": "8px",
						})
					}
					$(".user .hands img").attr('src',obj.headimgurl);
					$(".user .nickname").html(obj.nickname);
					$(".user .juli").html(obj.point+"m");
					nicknames=obj.nickname;
					mingcis=obj.rank+1;
					var overshare="这款游戏让我感觉智商真被掏空，超级车手"+obj.nickname+"在车友飙车全球游戏排名"+mingcis+"求超越！"
					sharepage(overshare);
				}
			});
			var pageStart = 0,pageEnd = 0,page = -1;
			var rankNum=0;
				$(".rankMark").dropload({
					scrollArea:$(".rankMark"),
					loadDownFn:function (me) {
						page++;
						$.ajax({
							type:"get",
							url:"/weixin2/game/ranks",
							data:{
								page:page,
							},
							dataType: "json",
							success:function(obj){
								pageStart = page*20;
								for (var i = pageStart; i < obj.content.length; i++) {
									rankNum++;
									var userdiv=$('<div class="users clear">'+
											'<span class="mingci ran'+rankNum+'">'+rankNum+'</span>'+
											'<span class="hands">'+
													'<img  src='+obj.content[i].headimgurl+' alt="">'+
											'</span>'+
											'<span class="nickname">'+obj.content[i].nickname+'</span>'+
											'<span class="juli">'+obj.content[i].point+'m</span>'+
									'</div>');
									$(".userall").append(userdiv);
								}

							},
							error: function(xhr, type){
                    me.resetload();
              }
						});
					}
				})
		}
		bgImg.draw();//背景绘制
		bgImg.draw1();
		hero.draw();
		car.draw();
		score.draw();//分数背景绘制
		score1.draw();
		score1.draw1();
		score1.draw2();
		drawScore();
		function animate() {
			frameNum++;
			frameNums++;
			context.clearRect(0,0,canvas1.width,canvas1.height);//清屏
			context2.clearRect(0,0,canvas1.width,canvas1.height);//清屏
			bgImg.move();//背景动
			bgImg.draw();//背景绘制
			bgImg.draw1();
			hero.draw();
			car.draw();
			if (!gameOverBol) {
				return;
			}

			createMonster();//创建食物
			drawMonster();//绘制食物
			createcarMonster();//创建食物
			drawcarMonster();//绘制食物
			score.draw();//分数背景绘制
			score1.draw();
			score1.draw1();
			score1.draw2();
			drawScore();//分数的绘制

			changeSpeed();  //达到一定分数改变速度
			if(frameNum == 1200){
				frameNum = 0;

			}
			  animateRuning=window.requestAnimationFrame(animate);
		}
		setTimeout(function () {
			if (num==0) {
				animate();
			}
		},3000)

		$(".playimg").on('click',function () {
			window.cancelAnimationFrame(animateRuning);
			$(".stoppage").show();
			if (mutes==true) {
				$(".sound").hide();
				$(".laba").show();
				$("#gameMusic")[0].play();
			}else {
				$(".sound").show();
				$(".laba").hide();
				$("#gameMusic")[0].pause();
			}
		})
		$(".backs").on("click",function () {
			$(".stoppage").hide();
			animateRuning=window.requestAnimationFrame(animate);
		});
		$(".bofang").on('click',function () {
			$(".stoppage").hide();
			animateRuning=window.requestAnimationFrame(animate);
		});
		$(".laba").on('click',function () {
			mutes=false;
			$(".sound").show();
			$(".laba").hide();
			$("#gameMusic")[0].pause();
		});
		$(".sound").on('click',function () {
			mutes=true;
			$(".sound").hide();
			$(".laba").show();
			$("#gameMusic")[0].play();
		})

		canvas1.addEventListener("touchstart",function () {
			if (hero.drawX>=canvas1.width/2-heroW/2) {
				hero.drawX = canvas1.width/4-heroW/2;
				hero.drawY = canvas1.height-heroH-10;
			}else {
				hero.drawX = canvas1.width*3/4-heroW/2;
				hero.drawY = canvas1.height-heroH-10;
			}
			event.preventDefault();
		})
		canvas2.addEventListener("touchstart",function () {
			if (car.drawX>=canvas2.width/2-carW/2) {
				car.drawX = canvas2.width/4-carW/2;
				car.drawY = canvas2.height-carH-10;
			}else {
				car.drawX = canvas2.width*3/4-carW/2;
				car.drawY = canvas2.height-carH-10;
			}
			event.preventDefault();
		})
		function again() {
			gameOverBol=true;
			frameNum=0;//帧数重置
			frameNums=0;
			monsterMoveSpeed = 3;
			coxspeed=0;
			createMonsterSpeed=60;//创建怪物速度重置
			scoreNum=0;//分数重置
			distance=0;
			coxspeed=monsterMoveSpeed-1;
		  removeBol = false;
			num=3;
			hero.drawX=canvas1.width/4-heroW/2;
			hero.drawY=canvas1.height-heroH-10;
			car.drawX=canvas2.width/4-heroW/2;
			car.drawY=canvas2.height-carH-10;
			animate();
		}
		$(".lookrank").on("touchstart",function () {
				$(".ranks").show();
				$(".gameover").hide();
				if (mutes==true) {
					$("#look_rank")[0].play();
				}else {
					$("#look_rank")[0].pause();
				}
				var endshare="这款游戏让我感觉智商真被掏空，超级车手"+nicknames+"在车友飙车全球游戏排名"+mingcis+"求超越！";
				sharepage(endshare);
			})
		$(".replay").on("click",function () {
				if (mutes==true) {
					$("#gameMusic")[0].play();
				}else {
					$("#gameMusic")[0].pause();
				}
				again();
				$(".userall").empty();
				$(".gameover").hide();
			})
		$(".replay1").on("click",function () {
				if (mutes==true) {
					$("#gameMusic")[0].play();
				}else {
					$("#gameMusic")[0].pause();
				}
				again();
				$(".userall").empty();
				$(".ranks").hide();
			})

	}
//game()end
	function randFn(min,max){
		return parseInt(Math.random()*(max-min)+min);
	}
	$(".share").on('click',function () {
		$(".share").hide();
	})
	//取当前的url
	function sharepage(des) {
		var absurl = window.location.href;
		if(absurl.indexOf("#") != -1) {
			absurl = absurl.substring(0, absurl.indexOf("#"));
		}
		//发请求拿jssdk的验证配置
		$.ajax({
			type: "get",
			url: "../weixin/jsapiTicket?url=" + encodeURIComponent(absurl),
			dataType: "json",
			success: function(data) {
				//设置要调用的方法.
				data.jsApiList = [
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ',
					'onMenuShareWeibo',
					'onMenuShareQZone',
					'startRecord',
					'stopRecord',
					'onVoiceRecordEnd',
					'playVoice',
					'pauseVoice',
					'stopVoice',
					'onVoicePlayEnd',
					'uploadVoice',
					'downloadVoice',
					'chooseImage',
					'previewImage',
					'uploadImage',
					'downloadImage',
					'translateVoice',
					'getNetworkType',
					'openLocation',
					'getLocation',
					'hideOptionMenu',
					'showOptionMenu',
					'hideMenuItems',
					'showMenuItems',
					'hideAllNonBaseMenuItem',
					'showAllNonBaseMenuItem',
					'closeWindow',
					'scanQRCode',
					'chooseWXPay',
					'openProductSpecificView',
					'addCard',
					'chooseCard',
					'openCard'
				];

				//配置微信
				wx.config(data);
				wx.ready(function() {
					//配置成功以后修改分享的信息
					var title = "车友飙车";
					var link = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
					"appid=" + weixinAppId +"&redirect_uri=" + oauthCallbackUrl +"&response_type=code" +
					"&scope=snsapi_userinfo" + //+ ((typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType) +
					"&state=" + encodeURIComponent(window.location.href) +
					"#wechat_redirect";
					var imgUrl = "http://cdn4dev.haoduocheyou.com/weixin2/race/image/shareicon.png";
					var desc = des;
					wx.onMenuShareTimeline({
						title: title,
						link: link,
						imgUrl: imgUrl,
						success: function() {},
						cancel: function() {}
					});

					wx.onMenuShareAppMessage({
						title: title,
						desc: desc,
						link: link,
						imgUrl: imgUrl,
						success: function() {},
						cancel: function() {}
					});

					wx.onMenuShareQQ({
						title: title,
						desc: desc,
						link: link,
						imgUrl: imgUrl,
						success: function() {},
						cancel: function() {}
					});

					wx.onMenuShareWeibo({
						title: title,
						desc: desc,
						link: link,
						imgUrl: imgUrl,
						success: function() {},
						cancel: function() {}
					});

					wx.onMenuShareQZone({
						title: title,
						desc: desc,
						link: link,
						imgUrl: imgUrl,
						success: function() {},
						cancel: function() {}
					});
				});
				wx.error(function(res) {
					for(var prop in res) {
						alert(res[prop]);
					}
				});
			}
		});
	}
}
