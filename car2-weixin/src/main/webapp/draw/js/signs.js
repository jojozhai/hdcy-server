$(function() {
	is_weixin();
	var weixinAppId = "";
	var oauthCallbackUrl = "";
	var scope = (typeof weixinOauthType === 'undefined') ? "snsapi_base" : weixinOauthType;
	$.ajax({
		type: "get",
		url: "../param/weixinAppId",
		dataType: "json",
		success: function(obj) {
			weixinAppId = obj.value;
		},
	});
	$.ajax({
		type: "get",
		url: "../param/oauthCallbackUrl",
		dataType: "json",
		success: function(obj) {
			oauthCallbackUrl = obj.value;
		},
	});
	function is_weixin() {
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i) == "micromessenger") {
			$.ajax({
				type: "get",
				url: "../user/current",
				dataType: "json",
				success: function(obj) {
					main();
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
			
		} else {
			main();
		}
	}

	function main() {
		var page = 1;
		drawpage(page);
		var desc1 = "2017，求一枚新年签。";
		var shareimg1 = "http://cdn4dev.haoduocheyou.com/weixin2/draw/images/shareimg.jpg";
		sharepage(desc1, shareimg1)

		function drawpage(pages) {
			$.ajax({
				type: "get",
				url: "../game/draw/lots/statistics",
				data: {
					number: pages,
				},
				dataType: "json",
				success: function(data) {}
			})
		}
		$(".enter").on('click', function() {
			$(".page").hide();
			$(".page1").show();
			page = 2;
			drawpage(page);
			sharepage(desc1, shareimg1)
		})
		$(".names").focus(function() {
			$(".ownerimg").removeClass("owner");
			$(".ownerimg").addClass("owner1");
			$(".qius").removeClass("qiusign");
			$(".qius").addClass("qiusign1");
		});
		$(".names").blur(function() {
			$(".ownerimg").removeClass("owner1");
			$(".ownerimg").addClass("owner");
			$(".qius").removeClass("qiusign1");
			$(".qius").addClass("qiusign");
		});
		var man = 0;
		var woman = 0;
		$(".man").on('click', function() {
			$(".man").hide();
			$(".woman1").hide();
			$(".woman").show();
			$(".man1").show();
			man = 1;
			woman = 0;
		})
		$(".woman").on('click', function() {
			$(".woman").hide();
			$(".man").show();
			$(".man1").hide();
			$(".woman1").show();
			man = 0;
			woman = 1;
		})
		var sex;
		$(".qius").on('click', function() {
			var name = $(".names").val();
			if(name == "" || man == 0 && woman == 0) {
				$(".alerts").fadeIn();
				setTimeout(function() {
					$(".alerts").fadeOut();
				}, 1500)
			} else {
				$(".loads").show();
				page = 3;
				drawpage(page);
				var desc2 = name + "的新年签，你呢？";
				if(man == 1) {
					sex = 1;
				} else if(woman == 1) {
					sex = 2;
				}
				$.ajax({
					type: "get",
					url: "../game/draw/lots",
					data: {
						name: name,
						sex: sex,
					},
					dataType: "json",
					success: function(data) {
						$("#drawimg").attr('src', data.content);
						$(".loads").hide();
						$(".page1").hide();
						$(".page2").show();
						var shareimg2 = data.content;
						sharepage(desc2, shareimg2);
					}
				})
			}
		})

		$(".agains").on('click', function() {
			$("#drawimg").attr('src', "");
			$(".names").val("");
			$(".item").show();
			$(".woman1").hide();
			$(".man1").hide();
			$(".page2").hide();
			$(".page1").show();
			sharepage(desc1, shareimg1);
		})
	}

	function sharepage(des, shareimg) {
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
					var title = "";
					var link = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
						"appid=" + weixinAppId + "&redirect_uri=" + oauthCallbackUrl + "&response_type=code" +
						"&scope=snsapi_userinfo" + //+ ((typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType) +
						"&state=" + encodeURIComponent(window.location.href) +
						"#wechat_redirect";
					var imgUrl = shareimg;
					var desc = des;
					var desc1 = "";
					wx.onMenuShareTimeline({
						title: desc,
						link: link,
						imgUrl: imgUrl,
						success: function() {},
						cancel: function() {}
					});

					wx.onMenuShareAppMessage({
						title: desc,
						desc: desc1,
						link: link,
						imgUrl: imgUrl,
						success: function() {},
						cancel: function() {}
					});

					wx.onMenuShareQQ({
						title: desc,
						desc: desc1,
						link: link,
						imgUrl: imgUrl,
						success: function() {},
						cancel: function() {}
					});

					wx.onMenuShareWeibo({
						title: desc,
						desc: desc1,
						link: link,
						imgUrl: imgUrl,
						success: function() {},
						cancel: function() {}
					});

					wx.onMenuShareQZone({
						title: desc,
						desc: desc1,
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
})