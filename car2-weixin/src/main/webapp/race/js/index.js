var allImg = ["image/arrom.png","image/cheyou.png","image/home-bg.png","image/start.png","image/left.png","image/right.png","image/1.png","image/2.png","image/3.png","image/logo.gif","image/car.png","image/gift.png","image/sores-bg.png","image/sore-bg.png","image/boom.png","image/kill_boom.png"];
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
	$(".home").show()
}
weixin.app.id = wxce8eb11c51670a1d;
var oauthCallbackUrl = "http%3A%2F%2Fcdn4dev.haoduocheyou.com%2Fweixin2%2Fweixin%2Foauth";
var scope = (typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType;

var frameNum=0;//帧数
var scoreNum = 0;//分数
var distance=0;//距离
// 食物的数组，创建速度
var monsters = [];
var createMonsterSpeed = 23;
var monsterMoveSpeed = 1.6;
var removeBol = false;

$(".start").on('click',function () {
	$(".home").hide();
	$(".game").show();
	$(".countdown").show();
	var num=3;
	var timer=setInterval(function(){
		num--;
		if (num<1) {
			clearInterval(timer);
			$(".countdown").hide();
			game();
		}else {
			$(".countdown").css({
				"background": "url(image/"+num+".png) no-repeat"
			})
		}

	},1000)

})

function game () {
	// TODO
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
	// 背景图对象
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
			this.y++;
			distance=this.y
			if (this.y>=bgH){
				this.y = 0;
			}
		}
	}

	//logo对象------------------------------------

	var heroW = 63*0.8;
	var heroH = 54.5*0.8;
	var hero = {
		w:heroW,
		h:heroH,
		drawX:canvas1.width/2-heroW/2,
		drawY:canvas1.height-heroH-10,
		draw:function(){
			context.drawImage(loadOver[9],this.drawX,this.drawY,this.w,this.h);
		}
	}
	// che对象
	var carW = 50.4;
	var carH = 87.487;
	var car = {
		w:carW,
		h:carH,
		drawX:canvas2.width/2-carW/2,
		drawY:canvas2.height-carH-10,
		draw:function(){
			context2.drawImage(loadOver[10],this.drawX,this.drawY,this.w,this.h);
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
	//che移动限制

	//奖励对象
	function Monster(monster){
		this.w = monster.w;
		this.h = monster.h;
		var monsterdrawxR = randFn(0,2);
		var monsterdrawxArr = [0.170,0.570];
		this.drawX = monsterdrawxArr[monsterdrawxR]*canvas1.width;
		this.drawY = -monster.h;
		this.score = monster.score;
		this.speed = monsterMoveSpeed+0.2*randFn(0,4);
		this.survival = true;
		this.img = monster.img;
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
				context.drawImage(loadOver[15],this.drawX*0.95,this.drawY*0.95,50,51);

			}
		}
	}
	function createMonster() {
		// 创建奖励
		if (frameNum%createMonsterSpeed==0) {

			var monsterR=randFn(1,100);
		if (monsterR>=0&&monsterR<=90) {//礼物
				var monster={};//存放每一个monster的信息
				monster.w=42;
				monster.h=45;
				monster.img=loadOver[11];
				monster.score=10;
			}else {
				var monster = {};
				monster.w = 78*0.8;
				monster.h = 54*0.8;
				monster.img = loadOver[14];
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
					}else {
						gameOver();
					}
				}
			}
			if(bol||removeBol){
				i--;
				removeBol = false;
			}
		}
	}

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
	// 爆炸对象，显示吃到的分数
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
			context3.drawImage(loadOver[12],0,0,this.w,this.h);
		}
	}

	var scoreW = 111;
	var scoreH = 30;
	var score1 = {
		w:scoreW,
		h:scoreH,
		draw:function(){
			context3.drawImage(loadOver[13],10,7.5,this.w,this.h);
		},
		draw1:function(){
			context3.drawImage(loadOver[13],131,7.5,this.w,this.h);
		},
		draw2:function(){
			context3.drawImage(loadOver[13],252,7.5,this.w,this.h);
		}
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
		context3.fillText("距离：",30,27);
		context3.fillText(distance,65,27);
		context3.fillText("速度：",155,27);
		context3.fillText(monsterMoveSpeed,190,27);
		context3.fillText("奖励：",275,27);
		context3.fillText(scoreNum,310,27);
	}

	// 达到一定的分数改变速度
	function changeSpeed() {
		if(scoreNum>=1000&&scoreNum<=2000){
			monsterMoveSpeed = 1.8;
		}else if(scoreNum>2000&&scoreNum<3000){
			monsterMoveSpeed = 2;
		}else if(scoreNum>=3000&&scoreNum<4000){
			monsterMoveSpeed = 2.2;
		}else if(scoreNum>=4000){
			monsterMoveSpeed = 2.4;
		}
	}
	//游戏结束
	var gameOverBol=true;
	function gameOver() {
		ranges(distance);
		monsters=[];
		gameOverBol=false;
		updateNum();

	}
	function updateNum() {
		$(".gameover").show();
		$(".distance").html("距离："+distance);

	}
	function ranges(dis) {
		var data1={
			game:'race',
			point: dis,
		};
		$.ajax({
			type:"POST",
			url:"/weixin2/game/rank",
			"contentType":"application/json; charset=utf-8",
			data:JSON.stringify(data1),
			dataType: "json",
			success:function(str){
					$(".paiming").html("排名："+str.content);
					//取当前的url
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
								var title = obj.name;
								var link = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
								"appid=" + weixinAppId +
								"&redirect_uri=" + oauthCallbackUrl +
								"&response_type=code" +
								"&scope=snsapi_userinfo" + //+ ((typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType) +
								"&state=" + encodeURIComponent(window.location.href) +
								"#wechat_redirect"
								var imgUrl = obj.image
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
		});
	}

	//动画
	function animate() {
		frameNum++;
		context.clearRect(0,0,canvas1.width,canvas1.height);//清屏
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
		score.draw();//分数背景绘制
		score1.draw();
		score1.draw1();
		score1.draw2();
		drawScore();//分数的绘制

		changeSpeed();  //达到一定分数改变速度
		if(frameNum == 1000){
			frameNum = 0;
		}
		  window.requestAnimationFrame(animate);
	}
	animate();
	canvasmove(canvas1,hero);
	canvasmove(canvas2,car);
	var moveAble=false;
function canvasmove(obj,obj1) {
	obj.addEventListener("touchstart",function() {
		var first = event.touches[0];
		 if (obj==canvas1) {
				 if(first.clientX>=obj1.drawX&&first.clientX<=obj1.drawX+obj1.w&&first.clientY>=obj1.drawY&&first.clientY<=obj1.drawY+obj1.h){
	  			moveAble = true;
	  		}
	  	  rangeX = first.clientX - obj1.drawX;
	  	  rangeY = first.clientY - obj1.drawY;
		 }else {
			 var objtouch=first.clientX-obj.width;
			 if(objtouch>=obj1.drawX&&objtouch<=obj1.drawX+obj1.w&&first.clientY>=obj1.drawY&&first.clientY<=obj1.drawY+obj1.h){
 			 moveAble = true;
	 		 }
	 		 rangeX = objtouch - obj1.drawX;
	 		 rangeY = first.clientY - obj1.drawY;
		 }
	 event.preventDefault();
	},false)
	obj.addEventListener("touchmove",function () {
		var first=event.touches[0];

		if (moveAble) {
			if (obj==canvas1) {
				obj1.drawX = first.clientX - rangeX;
				obj1.drawY = first.clientY - rangeY;
			}else {
				obj1.drawX = first.clientX-obj.width - rangeX;
				obj1.drawY = first.clientY - rangeY;
			}
		}
		heroMoveLimit(obj,obj1);
		if (obj1.drawY <= 0) {
				obj1.drawY = 0;
		}else if (obj1.drawY >= obj.height-obj1.h) {
				obj1.drawY = obj.height-obj1.h;
		}
	event.preventDefault();
	},false)
	obj.addEventListener("touchend",function () {
		moveAble=false;
	})
}

function again() {

	gameOverBol=true;
	frameNum=0;//帧数重置
	monsterMoveSpeed = 1.6;
	createMonsterSpeed=23;//创建怪物速度重置
	scoreNum=0;//分数重置
	distance=0;
	hero.drawX=canvas1.width/2-heroW/2;
	hero.drawY=canvas1.height-heroH-10;
	car.drawX=canvas2.width/2-heroW/2;
	car.drawY=canvas2.height-carH-10;
	animate();

}
$(".replay").on("click",function () {
	again();
	$(".gameover").hide();
})
// TODO
}

function randFn(min,max){
	return parseInt(Math.random()*(max-min)+min);
}

$(".share").on('click',function () {
	$(".share").hide();
})