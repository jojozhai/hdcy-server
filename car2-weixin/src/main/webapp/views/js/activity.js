$(function() {
	var heights=document.documentElement.clientHeight;
    $(".active-conmes").height(heights-50);
	var gap = function(date, creatime) {
		var now = new Date;
		var that = new Date(date);
		if(that.getFullYear() == now.getFullYear() && that.getMonth() == now.getMonth() &&
			that.getDate() == now.getDate() - 1) {
			creatime.html('昨天 ' + that.toLocaleTimeString());
		} else if(that.getFullYear() == now.getFullYear() && that.getMonth() == now.getMonth() &&
			that.getDate() == now.getDate()) {
			var ms = Math.floor((now - that) / 1000 / 60 / 60);
			if((now - that) / 1000 / 60 < 60) {
				ms = Math.floor((now - that) / 1000 / 60);
				creatime.html(ms + '分钟前');
			} else {
				creatime.text(ms + ' 小时前');
			}

		} else {

			creatime.html(that.toLocaleDateString());
		}
	}

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
	$(".more a").attr('href','http://cdn.haoduocheyou.com/#/comment?target=activity&targetId='+id+'&withReply=true');
	
	$.ajax({
		type: "get",
		url: "../activity/" + id,
		dataType: "json",
		success: function(obj) {
			var viewtime=new Date().getTime();			
			if (viewtime>obj.signEndTime) {
				$(".sign a").removeClass('xiansign');
				$(".sign a").addClass('activity-ends');
				$(".sign activity-ends").html("报名已截止")
			} 
			$(".actDetail-imgsCon").width(108 * obj.images.length);
			$(".actDetail-tit").html(obj.name);
			$(".actDetail-con").html(obj.desc);
			$(".zhuaban-name").html(obj.sponsorName);
			var starTime = new Date(obj.startTime);
			$(".zhuban-time").html(starTime.Format());			
			$(".zhuban-city").html((obj.province ? obj.province : "" )+ obj.city + obj.address);
			$(".zhuban-price").html(obj.price ? obj.price : "免费");
			$(".kefu-telimg").attr('src',obj.waiterInfo.image);
			$(".kefu-mes").html(obj.waiterInfo.name+"："+obj.waiterInfo.phone);
			$(".caozuo a").attr('href',obj.waiterInfo.phone);
			//$(".comzixun").html("活动咨询("+obj.)
			for(var i = 0; i < obj.images.length; i++) {
				var smallImg = $('<div class="actDetail-img">\
							<img src=' + obj.images[i] + '>\
						</div>')
				$(".actDetail-imgsCon").append(smallImg);
				var newImg1=$("<div class='swiper-slide' dataIndex="+i+"><img src="+ obj.images[i]+" alt=''/></div>");
                $(".bigactImg .swiper-wrapper").append(newImg1);
			}		
						
			$(".actDetail-img").on('click',function () {
				$(".bigactImg").show();
				var mySwiper = new Swiper ('.bigactImg .swiper-container', {
                    loop: true,
                    pagination: '.swiper-pagination',
                })
				var index=$(this).index();
                    $(".bigactImg").show();
                    $(".bigactImg").css({
                        "background": "rgba(0, 0, 0, 0.9)",
                        "z-index": "9999",
                    })
                    $(".swiper-wrapper").css({
                         transform:" translate3d("+(-375)*(index+1)+"px, 0px, 0px)",
                     })
                    $(".swiper-slide").removeClass("swiper-slide-active");
                    $(".swiper-slide").eq(index).addClass("swiper-slide-active");
                    $(".swiper-pagination-bullet").removeClass("swiper-pagination-bullet-active");
                    $(".swiper-pagination-bullet").eq(index).addClass("swiper-pagination-bullet-active");

                    $(".swiper-slide img").on("click",function(){
                        $(".bigactImg").hide();
                    })
			})
			$(".zhuaban-name").on('click',function () {			
				if (obj.sponsorLeaderId) {
					window.location.href='http://cdn4dev.haoduocheyou.com/#/leader/'+obj.sponsorLeaderId
				}
			})
			
			//取当前的url
			var absurl = window.location.href;
			if(absurl.indexOf("#") != -1) {
				absurl = absurl.substring(0, absurl.indexOf("#"));
			}
			//发请求拿jssdk的验证配置
			$.ajax({
				type: "get",
				url: "../weixin/jsapiTicket?url="+encodeURIComponent(absurl),
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
		  				'openCard'];  
		  			//配置微信
		  	        wx.config(data);
		  	        wx.ready(function(){
		  	        	//配置成功以后修改分享的信息
		  	        	var title = obj.name;
		  				var link = window.location.href;
		  				var imgUrl = obj.image
		  				wx.onMenuShareTimeline({
		  		    	    title: title, 
		  		    	    link: link, 
		  		    	    imgUrl: imgUrl,
		  		    	    success: function () { 
		  		    	    },
		  		    	    cancel: function () { 
		  		    	    }
		  		    	});
		  		    	
		  		    	wx.onMenuShareAppMessage({
		  		    	    title: title, 
		  		    	    desc: desc, 
		  		    	    link: link, 
		  		    	    imgUrl: imgUrl, 
		  		    	    success: function () { 
		  		    	    },
		  		    	    cancel: function () { 
		  		    	    }
		  		    	});
		  		    	
		  		    	wx.onMenuShareQQ({
		  		    	    title: title, 
		  		    	    desc: desc, 
		  		    	    link: link, 
		  		    	    imgUrl: imgUrl, 
		  		    	    success: function () { 
		  		    	    },
		  		    	    cancel: function () { 
		  		    	    }
		  		    	});
		  		    	
		  		    	wx.onMenuShareWeibo({
		  		    	    title: title, 
		  		    	    desc: desc, 
		  		    	    link: link, 
		  		    	    imgUrl: imgUrl, 
		  		    	    success: function () { 
		  		    	    },
		  		    	    cancel: function () { 
		  		    	    }
		  		    	});
		  		    	
		  		    	wx.onMenuShareQZone({
		  		    	    title: title, 
		  		    	    desc: desc, 
		  		    	    link: link, 
		  		    	    imgUrl: imgUrl, 
		  		    	    success: function () { 
		  		    	    },
		  		    	    cancel: function () { 
		  		    	    }
		  		    	});
		  	        });
		  	        wx.error(function(res){
		  	        	for (var prop in res) {
		  	        		alert(res[prop]);
		          		}
		  	        });
				}
			});
		}
	});


	$.ajax({
		type: "get",
		url: "../comment",
		data: {
			target: "activity",
			targetId: id,
			size: "5",
			withReply: "true",
			sort: "createdTime,desc"
		},
		dataType: "json",
		success: function(obj) {			
			for(var i = 0; i < obj.content.length; i++) {	
				console.log(obj.content[i].createrHeadimgurl)
				var activitycoms = $("<div class='comment-reply'>"+
									"<div class='conmmentList clear'>"+
									"<div class='commhand fl'>"+
								"<img src='"+obj.content[i].createrHeadimgurl+"'/>" +
							"</div>"+
							"<div class='comment-right fl'>"+
								"<span class='nickname'>"+obj.content[i].createrName+"</span>"+
								"<div class='commentcon-time'>"+
									"<div class='commentcon'>"+obj.content[i].content+"</div>"+
									"<span class='com-time'></span>"+
								"</div>"+
							"</div>"+
						"</div>"+
						"<div class='replys" + i + "'></div>"+
					"</div>")
				$(".comments").append(activitycoms);
				var creatime=new Date(obj.content[i].createdTime);
				gap(creatime.toString(), $('.com-time'));
				if (obj.content[i].replys.length!=0) {
					for (var j=0;j<obj.content[i].replys.length;j++) {
						var actreply=$("<div class='replyList clear'>"+
							"<div class='replyImg fr'>"+
									"<img src='images/hdcy.png'/>"+
								"</div>"+
							"<div class='replay-right fr'>"+
								"<span class='nickname'>好多车友</span>"+
								"<div class='commentcon-time replytcon-time'>"+
								"<div class='commentcon replycon'>"+obj.content[i].replys[j].content+"</div>"+
								"<span class='recom-time'></span>"+
							"</div>"+
							"</div>"+
						"</div>")
						$(".replys"+i).append(actreply);
						var creatime=new Date(obj.content[i].replys[j].createdTime);
						gap(creatime.toString(), $('.recom-time'));
					}
				} 
			}
		}
	});
	$(".con-downs").on('click',function(){
		$(".actDetail-con").height('auto');
		$(".con-ups").css('display','inline-block');
		$(".con-downs").hide()
	})
	$(".con-ups").on('click',function () {
		$(".actDetail-con").height(108);
		$(".con-downs").css('display','inline-block');
		$(".con-ups").hide();
	})
	
	$(".steam").on('click',function () {
		$(".telss").show();
	})
	$(".guaduan").on('click',function () {
		$(".telss").hide();
	})
	$(".telbg").on('click',function () {
		$(".telss").hide();
	})
	
	var weixinAppId = "wx2622b448b854003a";
	var oauthCallbackUrl = "http%3A%2F%2Fcdn.haoduocheyou.com%2Fweixin2%2Fweixin%2Foauth";
//	立即报名
	$('.xiansign').on('click',function (){
		 var request = new XMLHttpRequest();         
         request.onreadystatechange = function () {
        	if (request.status == 401||request.status == 403) {
          		var scope = (typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType;
				var url = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
				"appid=" + weixinAppId +
				"&redirect_uri=" + oauthCallbackUrl +
				"&response_type=code" +
				"&scope=snsapi_userinfo" + //+ ((typeof weixinOauthType === 'undefined')?"snsapi_base":weixinOauthType) +
				"&state=" + encodeURIComponent(window.location.href) + 
				"#wechat_redirect";
				window.location.href = url;
         	}else if(request.readyState == 4 && request.status == 200) {
         		window.location.href='activitysign.html?id='+id;
         	}
        	      
         };
         request.open("get", "../user/current");               
         request.send();   
	})
	

})