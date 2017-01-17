$(function() {
	var startMusic = document.getElementById("start-music")
	var bgMusic = document.getElementById("bg-music");
	var boomMusic = document.getElementById("boom-music");
	var gameOverMusic = document.getElementById("over-music");
	var rankMusic = document.getElementById("look-music");
	var audioFlag = 1;
	var scoreNum = 0;
	var distance = 0;
	var nicknames = "明天";
	var mingcis = 1;
	var weixinAppId = "wxce8eb11c51670a1d";
	var oauthCallbackUrl = "http%3A%2F%2Fcdn4dev.haoduocheyou.com%2Fweixin2%2Fweixin%2Foauth";
	var scope = (typeof weixinOauthType === 'undefined') ? "snsapi_base" : weixinOauthType;
	$.ajax({
		type: "get",
		url: "../user/current",
		dataType: "json",
		success: function(obj) {
			cargame();
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			if(XMLHttpRequest.status == 403) {
				window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
					"appid=" + weixinAppId + "&redirect_uri=" + oauthCallbackUrl + "&response_type=code" +
					"&scope=snsapi_userinfo" + //+ ((typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType) +
					"&state=" + encodeURIComponent(window.location.href) +
					"#wechat_redirect";
			}

		}
	})

	function cargame() {
		var allImg = ['static/img/bg.png', 'static/img/car.png',
			'static/img/f_oil.png', 'static/img/f_g3.png', 'static/img/sores-bg.png', 'static/img/kill_boom.png', 'static/img/blueKart.png','static/img/back.png','static/img/blur.png','static/img/bofang.png','static/img/game-bg.png','static/img/game-over.png','static/img/hand.png','static/img/handbg.png','static/img/home-bg.png','static/img/homecar.png','static/img/homelogo.png','static/img/homesound.png','static/img/juli.png','static/img/laba.png','static/img/lookrank.png','static/img/mute.png','static/img/no.png','static/img/overbg.png','static/img/overbgup.png','static/img/play.png','static/img/rankbg.png','static/img/rankingbg.png','static/img/ranklogo.png'
		];

		var loadOver = [];
		loadOver = loadImg(allImg, function() {
			$(".loading").hide();
			homeAnimate()
		})
		var frameNum = 0; //帧数
		//食物的数组,创建速度
		var monsters = [];
		var monsters1 = [];
		var createMonsterSpeed = 35;
		var monsterMoveSpeed = 4;
		var coxspeed = 4;
		var removeBol = false;
		var removeBol1 = false;
		function homeAnimate() {
			$(".home").show();
			if(audioFlag == 1) {
				startMusic.play();
			}
			main();
		}

		function main() {
			var canvas = document.getElementById('canvas');
			var context = canvas.getContext('2d');
			var body = document.getElementsByTagName("body")[0];

			canvas.width = body.offsetWidth;
			canvas.height = body.offsetHeight;

			//对象的定义-----------------------------------------------------------------

			//背景图定义
			var bgH = canvas.height / canvas.width * 640;
			var bgImg = {
				w: canvas.width,
				h: canvas.height,
				x: 0,
				y: 0,
				draw: function() {
					context.drawImage(loadOver[0], this.x, this.y, this.w, this.h);
					context.drawImage(loadOver[0], this.x, this.y - this.h, this.w, this.h);
				},
				move: function() {
					this.y += 2;
					distance += 2;
					if(this.y >= this.h) {
						this.y = 0;
					}
				}
			}
			var heroW = 33;
			var heroH = 66.4;
			var hero = {
				w: heroW,
				h: heroH,
				drawX: canvas.width / 8 - 12,
				drawY: canvas.height - heroH - 10,
				draw: function() {
					context.drawImage(loadOver[1], this.drawX, this.drawY, this.w, this.h);
				}
			}
			var hero1 = {
					w: heroW,
					h: heroH,
					drawX: canvas.width * 5 / 8 - 10,
					drawY: canvas.height - heroH - 10,
					draw: function() {
						context.drawImage(loadOver[6], this.drawX, this.drawY, this.w, this.h);
					}
				}
				//英雄移动限制---------------------------------
			var limitX = 0.148 * canvas.width;

			function heroMoveLimit() {
				if(hero.drawX <= limitX) {
					hero.drawX = limitX;
				} else if(hero.drawX >= canvas.width - hero.w - limitX) {
					hero.drawX = canvas.width - hero.w - limitX;
				} else if(hero.drawY >= canvas.height - hero.h) {
					hero.drawY = canvas.height - hero.h;
				} else if(hero.drawY <= 0) {
					hero.drawY = 0;
				}
			}

			//食物对象--------------------------------------------
			function Monster(monster) {
				this.w = monster.w;
				this.h = monster.h;
				var monsterdrawxR = randFn(0, 1);
				var monsterdrawxArr = [0.150, 0.35];
				var monsterdrawxR1 = randFn(0, 1);
				var monsterdrawxArr1 = [0.65, 0.85]
				this.drawX = monsterdrawxArr[monsterdrawxR] * canvas.width - this.w / 2;
				this.drawY = -monster.h;
				this.drawX1 = monsterdrawxArr1[monsterdrawxR1] * canvas.width - this.w / 2;
				this.drawY1 = -monster.h;
				this.score = monster.score;
				this.speed = monsterMoveSpeed;
				this.survival = true;
				this.img = monster.img;
			}

			function Monster1(monster1) {
				this.w = monster1.w;
				this.h = monster1.h;
				var monsterdrawxR1 = randFn(0, 1);
				var monsterdrawxArr1 = [0.65, 0.85]
				this.drawX = monsterdrawxArr1[monsterdrawxR1] * canvas.width - this.w / 2;
				this.drawY = -monster1.h;
				this.score = monster1.score;
				this.speed = monsterMoveSpeed;
				this.survival = true;
				this.img = monster1.img;
			}
			Monster.prototype.draw = function() {
				context.drawImage(this.img, this.drawX, this.drawY, this.w, this.h);
			}
			Monster1.prototype.draw = function() {
				context.drawImage(this.img, this.drawX, this.drawY, this.w, this.h);
			}
			Monster.prototype.move = function() {
				this.drawY += this.speed;
			}
			Monster1.prototype.move = function() {
				this.drawY += this.speed;
			}
			Monster.prototype.clear = function() {
				if(this.drawY >= canvas.height) {
					for(var i = 0; i < monsters.length; i++) {
						if(this == monsters[i]) {
							monsters.splice(i, 1);
							return true;
						}
					}
				}
			}
			Monster1.prototype.clear = function() {
				if(this.drawY >= canvas.height) {
					for(var i = 0; i < monsters1.length; i++) {
						if(this == monsters1[i]) {
							monsters1.splice(i, 1);
							return true;
						}
					}
				}
			}
			Monster.prototype.die = function() {
				if(!this.survival) {
					if(this.score) {
						var boom = new Boom();
						boom.drawX = hero.drawX + hero.w;
						boom.drawY = hero.drawY;
						boom.score = this.score;
						boom.draw();
					} else {
						//					context.drawImage(loadOver[8], this.drawX * 0.95, this.drawY * 0.95, 50, 51);
					}
				}
			}
			Monster1.prototype.die = function() {
				if(!this.survival) {
					if(this.score) {
						var boom = new Boom();
						boom.drawX = hero.drawX + hero.w;
						boom.drawY = hero.drawY;
						boom.score = this.score;
						boom.draw();
					} else {
						//					context.drawImage(loadOver[8], this.drawX * 0.95, this.drawY * 0.95, 50, 51);
					}
				}
			}
			var a = 0;
			var flag = false;
			var flag1 = false;

			function createMonster() {
				if(frameNum % createMonsterSpeed == 0) {
					var monsterR = randFn(1, 100);
					if(monsterR >= 0 && monsterR <= 40) { //油箱
						var monster = {}; //存放每一个monster的信息
						monster.w = 37;
						monster.h = 36;
						monster.img = loadOver[2];
						monster.score = 10; //打了它之后的得分
						flag = true;
					} else {
						if(flag == true) {
							var monster = {};
							monster.img = loadOver[3];
							monster.w = 29;
							monster.h = 39;
							monster.score = 0;
							flag = false;
						} else {
							var monster = {}; //存放每一个monster的信息
							monster.w = 37;
							monster.h = 36;
							monster.img = loadOver[2];
							monster.score = 10; //打了它之后的得分
							flag = true;
						}
					}
					var monsterObj = new Monster(monster);
					monsters.push(monsterObj);
				}

			}

			function createMonster1() {
				if(frameNum % createMonsterSpeed == 0) {
					var monsterR1 = randFn(1, 100);
					if(monsterR1 >= 20 && monsterR1 <= 60) { //油箱
						var monster1 = {}; //存放每一个monster的信息
						monster1.w = 37;
						monster1.h = 36;
						monster1.img = loadOver[2];
						monster1.score = 10; //打了它之后的得分
						flag1 = true;
					} else {
						if(flag1 == true) {
							var monster1 = {};
							monster1.img = loadOver[3];
							monster1.w = 29;
							monster1.h = 39;
							monster1.score = 0;
							flag1 = false;
						} else {
							var monster1 = {}; //存放每一个monster的信息
							monster1.w = 37;
							monster1.h = 36;
							monster1.img = loadOver[2];
							monster1.score = 10; //打了它之后的得分
							flag1 = true;
						}
					}
					var monsterObj1 = new Monster1(monster1);
					monsters1.push(monsterObj1);
				}

			}

			function drawMonster() {
				//绘制食物
				for(var i = 0; i < monsters.length; i++) {
					monsters[i].move();
					monsters[i].draw();
					var bol = monsters[i].clear();
					if(!bol) {
						var monsterBol = collide(monsters[i], hero);

						if(monsterBol) {
							scoreNum += monsters[i].score;
							removeBol = true;
							monsters[i].survival = false;
							var dieBol = monsters[i].die();

							if(monsters[i].score == 0) {
								gameOver();
								if(audioFlag == 1) {
									gameOverMusic.play();
								}
							}
							monsters.splice(i, 1);
							if(audioFlag == 1) {
								boomMusic.play();
							}
						}
					}
					if(bol || removeBol) {
						i--;
						removeBol = false;
					}
				}
			}

			function drawMonster1() {
				//绘制食物
				for(var i = 0; i < monsters1.length; i++) {
					monsters1[i].move();
					monsters1[i].draw();
					var bol1 = monsters1[i].clear();
					if(!bol1) {
						var monsterbol1 = collide(monsters1[i], hero1);
						if(monsterbol1) {
							scoreNum += monsters1[i].score;
							removeBol1 = true;
							monsters1[i].survival = false;
							var dieBol1 = monsters1[i].die();

							if(monsters1[i].score == 0) {
								gameOver();
								if(audioFlag == 1) {
									gameOverMusic.play();
								}
							}
							monsters1.splice(i, 1);
							if(audioFlag == 1) {
								boomMusic.play();
							}
						}
					}
					if(bol1 || removeBol1) {
						i--;
						removeBol1 = false;
					}
				}
			}
			//碰撞检测---------------------------------------
			function collide(obj1, obj2) {
				var l1 = obj1.drawX;
				var r1 = l1 + obj1.w;
				var t1 = obj1.drawY;
				var b1 = t1 + obj1.h;

				var l2 = obj2.drawX;
				var r2 = l2 + obj2.w;
				var t2 = obj2.drawY;
				var b2 = t2 + obj2.h;

				if(r1 > l2 && l1 < r2 && b1 > t2 && t1 < b2) {
					return true;
				} else {
					return false;
				}
			}
			//爆炸对象,显示吃到的分数---------------------------------
			function Boom() {
				this.drawX = 0;
				this.drawY = 0;
			}
			Boom.prototype.draw = function() {
					context.fillStyle = "white";
					context.font = "30px Arial";
					context.fillText("+" + this.score, this.drawX, this.drawY);
				}
				//绘制分数背景------------------------------------------
			var scoreW = canvas.width;
			var scoreH = 54;
			var score = {
					w: scoreW,
					h: scoreH,
					drawX: canvas.width - scoreW,
					drawY: 0,
					draw: function() {
						context.drawImage(loadOver[4], this.drawX, this.drawY, this.w, this.h);
					}
				}
				//绘制分数------------------------------------
			function drawScore() {
				context.beginPath();
				context.fillStyle = "white";
				context.font = "13px Arial";
				context.fillText("距离:" + distance + "m", 20, 28);
				context.fillText("速度:" + coxspeed * 10 + "mph", 127, 28);
				context.fillText("奖励:" + scoreNum, 230, 28);
			}

			//达到一定的分数改变怪物的生成速度和子弹的生成速度
			function changeSpeed() {
				if(frameNum % 60 == 0) {
					monsterMoveSpeed += 0.05;
				}
				if(frameNum % 600 == 0) {
					coxspeed += 0.5;
					console.log(coxspeed)
				}

				//		if(scoreNum >= 20 && scoreNum <= 40) {
				//			monsterMoveSpeed = 4;
				//		} else if(scoreNum > 40 && scoreNum < 60) {
				//			monsterMoveSpeed = 5;
				//		} else if(scoreNum >= 60 && scoreNum < 80) {
				//			monsterMoveSpeed = 6;
				//		} else if(scoreNum >= 80) {
				//			monsterMoveSpeed = 7;
				//		}
			}

			// 游戏结束
			var gameOverBol = true;

			function gameOver() {
				monsters = []; //怪物数组清空
				monsters1 = []; //怪物数组清空
				gameOverBol = false;
				if(audioFlag == 1) {
					gameOverMusic.play();
				}
				bgMusic.pause();
				// 跳页面
				updateNum(); //触发事件
			}

			//更新最高分------------------------------------
			function updateNum() {
				$('.gameover .distance').html("得分:" + (distance + 30 * scoreNum));
				$('.gameover').show();
				var sorces = distance + 30 * scoreNum
				ranges(sorces);
			}
			//再玩一次---------------------------------------------------
			function again() {
				gameOverBol = true;
				frameNum = 0; //帧数重置
				createMonsterSpeed = 35; //创建怪物速度重置
				monsterMoveSpeed = 4;
				coxspeed = 4;
				clearMonsterBol = false; //清屏效果重置
				scoreNum = 0; //分数重置
				distance = 0;
				hero.drawX = canvas.width / 8 - 12;
				hero.drawY = canvas.height - heroH - 10;
				hero1.drawX = canvas.width * 5 / 8 - 10;
				hero1.drawY = canvas.height - heroH - 10;
				animate();
				if(audioFlag == 1) {
					bgMusic.play();
				}

			}
			//动画------------------------------------------------
			function animate() {
				startMusic.pause();
				frameNum++;
				context.clearRect(0, 0, canvas.width, canvas.height); //清屏
				bgImg.move(); //背景动
				bgImg.draw(); //背景绘制
				if(!gameOverBol) {
					return;
				}
				hero.draw();
				hero1.draw()
				createMonster(); //创建食物
				drawMonster(); //绘制食物
				createMonster1();
				drawMonster1();
				score.draw(); //分数背景绘制
				drawScore(); //分数的绘制
				changeSpeed(); //达到一定分数改变速度
				if(frameNum == 1200) {
					frameNum = 0;
				}
				animateRuning = window.requestAnimationFrame(animate);

			}

			var moveAble = false;
			var limitX = 0.148 * canvas.width;
			var leftroad=1;
			$(".left")[0].addEventListener("touchstart", function() {
				if (leftroad==1) {
					hero.drawX = canvas.width * 3 / 8 - 12;
					hero.drawY = canvas.height - heroH - 10;
					leftroad=0;
				}else{
					hero.drawX = canvas.width / 8 - 12;
					hero.drawY = canvas.height - heroH - 10;
					leftroad=1;
				}
//				var first = event.touches[0].clientX;
//				if(first > $(".left").width() / 2) {
//					hero.drawX = canvas.width * 3 / 8 - 12;
//					hero.drawY = canvas.height - heroH - 10;
//				} else {
//					hero.drawX = canvas.width / 8 - 12;
//					hero.drawY = canvas.height - heroH - 10;
//				}
				event.preventDefault();
			}, false);

			var rightroad=1;
			$(".right")[0].addEventListener("touchstart", function() {
				if (rightroad==1) {
					hero1.drawX = canvas.width * 7 / 8 - 20;
					hero1.drawY = canvas.height - heroH - 10;
					rightroad=0;
				}else{
					hero1.drawX = canvas.width * 5 / 8 - 10;
					hero1.drawY = canvas.height - heroH - 10;
					rightroad=1;
				}
//				var second = event.touches[0].clientX - $(".left").width();
//				if(second >= $(".right").width() / 2) {
//					hero1.drawX = canvas.width * 7 / 8 - 20;
//					hero1.drawY = canvas.height - heroH - 10;
//				} else {
//					hero1.drawX = canvas.width * 5 / 8 - 10;
//					hero1.drawY = canvas.height - heroH - 10;
//				}
				event.preventDefault();
			}, false);

			// 游戏开始
			$('.start').on('click', function() {
				$('.home').hide();
				$('.game').show();
				$(".tixingbg").show();
				$(".game_introdute").show();
			})
			$(".sure").on('click', function() {
				$(".tixingbg").hide();
				$(".game_introdute").hide();
				animate();
				$(".playimg").show();
				$(".stopimg").hide();
				if(audioFlag == 1) {
					bgMusic.play();
				}
			})

			//音乐开关键
			$('.homesound').on('click', function() {
					$(this).toggleClass('mute');
					startMusic.pause();
					boomMusic.pause();
					gameOverMusic.pause();
					rankMusic.pause();
					audioFlag *= -1;
					if(audioFlag == 1) {
						startMusic.play();
					} else {
						startMusic.pause();
					}
				})
				// 再来一次
			$(".replay").on('click', function() {
				$(".gameover").hide();
				again();
			})

			$('.replay1').on('click', function() {
				$('.ranks').hide();
				again();
			})
			$(".playimg").on('click', function() {
				window.cancelAnimationFrame(animateRuning);
				$(".stoppage").show();
				if(audioFlag != 1) {
					$(".laba").hide();
					$(".sound").show();
				}

			})
			$(".backs").on("click", function() {
				$(".stoppage").hide();
				animateRuning = window.requestAnimationFrame(animate);
			});
			$(".bofang").on('click', function() {
				$(".stoppage").hide();
				animateRuning = window.requestAnimationFrame(animate);
			});
			$(".laba").on('click', function() {
				$(".sound").show();
				$(".laba").hide();
				bgMusic.pause();
				audioFlag = -1;
			});
			$(".sound").on('click', function() {
				$(".sound").hide();
				$(".laba").show();
				bgMusic.play();
			})
		}

		$(".lookrank").on('click', function() {
			if(audioFlag == 1) {
				rankMusic.play();
			}
			$(".gameover").hide();
			$(".ranks").show();
			var endshare = nicknames + "在车友飙车全球游戏排名" + mingcis + "求超越！";
			sharepage(endshare);
		})

		function ranges(dis) {
			$.ajax({
				type: "get",
				url: "/weixin2/game/break",
				data: {
					game: 'game',
					point: dis
				},
				dataType: "json",
				success: function(obj) {
					if(obj.content == true) {
						$(".norecord").hide();
						$(".recordBreak").show();
					} else {
						$(".norecord").show();
						$(".recordBreak").hide();
					}
					rankAll(dis);
				}
			});
		}

		function rankAll(dist) {
			$.ajax({
				type: "get",
				url: "/weixin2/game/rank",
				data: {
					game: 'game',
					point: dist
				},
				dataType: "json",
				success: function(obj) {
					if((obj.rank + 1) > 3) {
						$(".user .mingci").html(obj.rank + 1)
					} else {
						$(".user .mingci").css({
							"width": "35px",
							"height": "54px",
							"background": "url(image/0" + (obj.rank + 1) + ".png) no-repeat",
							"background-size": "100% 100%",
							"margin-top": "8px",
						})
					}
					$(".user .hands img").attr('src', obj.headimgurl);
					$(".user .nickname").html(obj.nickname);
					$(".user .juli").html(obj.point);
					nicknames = obj.nickname;
					mingcis = obj.rank + 1;
					var overshare = obj.nickname + "在车友飙车全球游戏排名" + mingcis + "求超越！"
					sharepage(overshare);
				}
			});
			$(".rankMark").scroll(function() {
				var doc_height = $(".rankMarks").height();
				var scroll_top = $(".rankMark").scrollTop();
				var window_height = $(window).height();
				if(scroll_top == 0) {} else if(scroll_top + window_height >= doc_height) {
					loadmore.init();
				}
			});
			var loadmore;
			var page = 0;
			var maxpage = 0;
			var rankNum = 0;
			loadmore = {
				clist_status: true,
				clist_per_page: 20,
				load_bar: $('.userall'),
				init: function() {
					if(page > maxpage) {
						return;
					}
					if(this.clist_status) {
						this.load();
					}
				},
				load: function() {
					var _this = this;
					_this.clist_status = false;
					$.ajax({
						type: "get",
						url: "/weixin2/game/ranks",
						data: {
							page: page,
						},
						dataType: "json",
						success: function(obj) {
							page++;
							maxpage = obj.totalPages;
							for(var i = 0; i < obj.content.length; i++) {
								rankNum++;
								var userdiv = $('<div class="users clear">' +
									'<span class="mingci ran' + rankNum + '">' + rankNum + '</span>' +
									'<span class="hands">' +
									'<img  src=' + obj.content[i].headimgurl + ' alt="">' +
									'</span>' +
									'<span class="nickname">' + obj.content[i].nickname + '</span>' +
									'<span class="juli">' + obj.content[i].point + '</span>' +
									'</div>');
								$(".userall").append(userdiv);

							}
							_this.clist_status = true;
						},
					});
				}

			}
			loadmore.init();
		}

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
							"appid=" + weixinAppId + "&redirect_uri=" + oauthCallbackUrl + "&response_type=code" +
							"&scope=snsapi_userinfo" + //+ ((typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType) +
							"&state=" + encodeURIComponent(window.location.href) +
							"#wechat_redirect";
						var imgUrl = "http://cdn4dev.haoduocheyou.com/weixin2/race/image/shareicon.png";
						var desc = des;
						wx.onMenuShareTimeline({
							title: desc,
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

		function randFn(min, max) {
			return parseInt(Math.random() * (max - min + 1) + min);
		}
		//加载图片
		function loadImg(arr, fn) {
			var arr1 = [];
			var index = 0;
			var arr2 = [];
			for(var i = 0; i < arr.length; i++) {
				var imgObj = new Image();
				imgObj.src = arr[i];
				imgObj.index = i;
				imgObj.onload = function() {
					index++;
					var v = 'translate(' + (-20 * index / allImg.length) + 'rem)';
					$('#loading .loadingcar').css({
						transform: v,
						webkitTransform: v
					});
					$('#loading .progress').html(Math.ceil(index / allImg.length * 100) + '%');
					arr1.push(this);
					if(index > arr.length - 1) {
						for(var i = 0; i < arr1.length; i++) {
							for(var j = 0; j < arr1.length; j++) {
								if(arr1[j].index == i) {
									arr2.push(arr1[j]);
								}
							}
						}
						if(fn) {
							fn();
						}
					}
				}
			}
			return arr2;
		}
	}
})