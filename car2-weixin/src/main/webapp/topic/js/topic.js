$(function() {
	Date.prototype.Format = function(format) {
		format ? format : format = "yyyy-MM-dd ";
		var o = {
			"M+": this.getMonth() + 1, // month
			"d+": this.getDate(), // day
			"h+": this.getHours(), // hour
			"m+": this.getMinutes(), // minute
			"s+": this.getSeconds(), // second
			"q+": Math.floor((this.getMonth() + 3) / 3), // quarter
			"S": this.getMilliseconds()
		};
		if(/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + "").slice(4 - RegExp.$1.length));
		}
		for(var k in o) {
			if(new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length));
			}
		}
		return format;
	};

	function GetRequest() {
		var url = location.search;
		var theRequest = new Object();
		if(url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for(var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	}
	var Request = new Object();
	Request = GetRequest();
	var id = Request.id;
	$.ajax({
		type: "get",
		url: "/weixin2/contrary/" + id,
		dataType: "json",
		success: function(obj) {
			$(".topic-img").attr('src', obj.image);
			$(".topic-tit").html(obj.name);
			$(".topic-con").html(obj.desc);
			var counts = obj.redCount / (obj.blueCount + obj.redCount) * 100;
			$(".red-num").css('width', counts + "%");
			$(".blue-num").css('width', (100 - counts) + "%");
			$(".redtopic-num").html(obj.redCount);
			$(".bluetopic-num").html(obj.blueCount);
			$(".redtopic").html("观点：" + obj.redButton);
			$(".bluetopic").html("观点：" + obj.blueButton);
			$(".votes-tit").html(obj.redButton);
			$(".bluevotes-tit").html(obj.blueButton);
			$(".my-topic").html("我的观点：" + obj.redButton);
			$(".my-topics").html("我的观点：" + obj.blueButton);
			var viewtime = new Date().getTime();
			if(viewtime > obj.endTime) {
				$(".supports").hide();
			} else {
				$(".supports").show()
			}
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
						var link = window.location.href;
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
	$(".con-downs").on('click', function() {
		$(".topic-con").css('height', 'auto');
		$(".con-ups").css('display', 'inline-block');
		$(".con-downs").hide();
	})
	$(".con-ups").on('click', function() {
		$(".topic-con").css('height', '60px');
		$(".con-downs").css('display', 'inline-block');
		$(".con-ups").hide();
	})
	var pageStart = 0,
		pageEnd = 0,
		page = -1;
	$(".topic-cons").dropload({
		scrollArea: window,
		loadDownFn: function(me) {
			page++;
			$.ajax({
				type: "get",
				url: "/weixin2/contraryParticipator",
				data: {
					contraryId: id,
					page: page,
					size: '10',
					sort: 'createdTime,desc'
				},
				dataType: "json",
				success: function(obj) {
					console.log(obj)
					pageStart = page;
					pageEnd = pageStart + 1;
					var suportnum;
					var j = -1,
						x = -1;
					for(var i = pageStart; i < pageEnd; i++) {
						suportnum = obj.red.content.concat(obj.blue.content).length;
						for(var i = 0; i < suportnum; i++) {
							if(i % 2 == 0) {
								j++;
								if(j < obj.red.content.length) {
									var createdTime = new Date(obj.red.content[j].createdTime);
									var liodd = $('<li class="redsupport-list clear">' +
										'<img class="redsupport fl" src="' + obj.red.content[j].headimgurl + '"/>' +
										'<div class="redsupport-cons fl">' +
										'<div class="redsup-nickname"></div>' +
										'<div class="redsupport-con">' +
										'<span>' + obj.red.content[j].content + '</span>' +
										'<div class="redsup-time">' + createdTime.Format() + '</div>' +
										'</div>' +
										'</div>' +
										'</li>');
									$(".topic-cons").append(liodd);
								}

							} else {
								x++;
								if(x < obj.blue.content.length) {
									var lieven = $('<li class="bluesupport-list clear">' +
										'<img class="bluesupport fr" src="img/huati.png"/>' +
										'<div class="bluesupport-cons fr">' +
										'<div class="bluesup-nickname"></div>' +
										'<div class="redsupport-con">' +
										'<span>' + obj.blue.content[j].content + '</span>' +
										'<div class="redsup-time">2016-03-12</div>' +
										'</div>' +
										'</div>' +
										'</li>');
									$(".topic-cons").append(lieven);
								}

							}
						}
						if((i + 1) >= suportnum) {
							// 锁定
							me.lock();
							// 无数据
							me.noData();
							break;
						}
					}
					setTimeout(function() {
						me.resetload();
					}, 400);
				}
			});

		}
	})

	var weixinAppId = "wx2622b448b854003a";
	var oauthCallbackUrl = "http%3A%2F%2Fcdn.haoduocheyou.com%2Fweixin2%2Fweixin%2Foauth";

	var flag;
	//flag=1;代表支持红方
	//flag=0;代表支持蓝方
	$(".support-red").on('click', function() {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if(request.status == 401 || request.status == 403) {
				var scope = (typeof weixinOauthType === 'undefined') ? "snsapi_base" : weixinOauthType;
				var url = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
					"appid=" + weixinAppId +
					"&redirect_uri=" + oauthCallbackUrl +
					"&response_type=code" +
					"&scope=snsapi_userinfo" + //+ ((typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType) +
					"&state=" + encodeURIComponent(window.location.href) +
					"#wechat_redirect";
				window.location.href = url;
			} else if(request.readyState == 4 && request.status == 200) {
				$.ajax({
					type: "get",
					url: "/weixin2/participator/member?participationId=" + id,
					dataType: "json",
					success: function(obj) {
						if(obj.content == true) {
							$(".succ-supports").fadeIn();
							setTimeout(function() {
								$(".succ-supports").fadeOut();
							}, 2000)
						} else {
							$(".topic-mes").show();
							$(".votes-tit").show();
							$(".bluevotes-tit").hide();
							flag = 1;
						}
					}
				});
			}

		};
		request.open("get", "../user/current");
		request.send();

	})
	$(".support-blue").on('click', function() {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if(request.status == 401 || request.status == 403) {
				var scope = (typeof weixinOauthType === 'undefined') ? "snsapi_base" : weixinOauthType;
				var url = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
					"appid=" + weixinAppId +
					"&redirect_uri=" + oauthCallbackUrl +
					"&response_type=code" +
					"&scope=snsapi_userinfo" + //+ ((typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType) +
					"&state=" + encodeURIComponent(window.location.href) +
					"#wechat_redirect";
				window.location.href = url;
			} else if(request.readyState == 4 && request.status == 200) {
				$.ajax({
					type: "get",
					url: "/weixin2/participator/member?participationId=" + id,
					dataType: "json",
					success: function(obj) {
						if(obj.content == true) {
							$(".succ-supports").fadeIn();
							setTimeout(function() {
								$(".succ-supports").fadeOut();
							}, 2000)
						} else {
							$(".topic-mes").show();
							$(".votes-tit").hide();
							$(".bluevotes-tit").show();
							flag = 0;
						}
					}
				});
			}

		};
		request.open("get", "../user/current");
		request.send();
	})
	$(".think").on('click', function() {
		$(".topic-mes").hide();
	})

	$(".finish").on('click', function() {
		$(".saytopic").val("")
		$(".vote-success").hide();
	})
	var textnum = 70;
	$(".saytopic").on('keyup', function() {
			txtnum = 70 - $(this).val().length;
			$(".saytopic-num").html(txtnum);
		})
		//	投票
	$(".toupiao").on('click', function() {
		$(".topic-mes").hide();
		$(".vote-success").show();
		if(flag == 1) {
			$(".my-topics").hide();
			$(".my-topic").show();
			$.ajax({
				type: "post",
				url: "/weixin2/contraryParticipator",
				data: {
					content: $(".saytopic").val(),
					red: 'true',
				},
				dataType: "application/json;charset=UTF-8",
				success: function(obj) {
					
				}
			});
		} else {
			$(".my-topic").hide();
			$(".my-topics").show();
			$.ajax({
				type: "post",
				url: "/weixin2/contraryParticipator",
				data: {
					content: $(".saytopic").val(),
					blue: 'true',
				},
				dataType: "application/json;charset=UTF-8",
				success: function(obj) {
					
				}
			});
		}

	})

})