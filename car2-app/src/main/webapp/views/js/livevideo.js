$(function(){
	var heights=document.documentElement.clientHeight;
    $(".video-descom").height(heights-300);
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
	
	$(".yugao-nav a").on('click',function () {
		$(".yugao-nav a").removeClass('actived');
		$(this).addClass('actived');
		var index=$(this).index();
		$(".video-descom section").hide();
		$(".video-descom section").eq(index).show();
	})
	
	$.ajax({
		type:"get",
		url:"/app2/video/"+id,
		dataType: "json",
		success: function(obj) {
			console.log(obj);
			var yuTime=new Date(obj.startTime);			
			$(".yugao img").attr('src',obj.image);
			$(".zhibo-tit").html(obj.name);
			$(".video-time").html("开始时间："+yuTime.Format('yyyy-MM-dd h:m'));
			$(".zhibo-icon img").attr('src',obj.sponsorImage);
			$(".video-name1").html(obj.sponsorName);
			$(".zbjianjie").html(obj.desc);
//			$(".jiaoliu").html("直播交流"+obj.commentCount)
		}
	});
	
	$.ajax({
		type: "get",
		url: "/app2/comment",
		data: {
			target: "video",
			targetId: id,
			size: "5",
			withReply: "true",
			sort: "createdTime,desc"
		},
		dataType: "json",
		success: function(obj) {			
			for(var i = 0; i < obj.content.length; i++) {
				var comcon = $("<div class='comsList'>" +
					"<div class='comsup clear'>" +
					"<div class='comsupLeft fl'>" +
					"<img  src=" + obj.content[i].createrHeadimgurl + "/>" +
					"</div>" +
					"<div class='comsupRight fl'>" +
					"<div class='clear'>" +
					"<span class='nickname fl'>" + obj.content[i].createrName + "</span>" +
					"<div class='zandes fr'>" +
					"<span class='zan fl'></span>" +
					"<span class='zancount fl'>" + obj.content[i].praiseCount + "</span>" +
					"</div>" +
					"</div>" +
					"<span class='comtime'></span>" +
					"</div>" +
					"</div>" +
					"<div class='comcontent'>" + obj.content[i].content + "</div>" +
					"<div class='replys'><div class='replys" + i + "'><div class='replyscon" + i + "'></div></div>" +
					"</div>")
				$(".comments").append(comcon);
				if(obj.content[i].replys.length != 0) {
					$(".replys" + i).css({
						"background": "#39627F",
						"margin-left": " 40px",
						"width": "311px",
						"font-size": "14px",
						"margin-top": "12px",
						"color": "#9B9B9B"
					})

					function huifu(b) {
						for(var j = 0; j < b; j++) {
							var newReply = $("<div class='replyList'><span class='nickname'>" + obj.content[i].replys[j].createrName + "</span>\
                        <span class='huifu'>回复</span>\
                        <span class='nickname'>" + obj.content[i].replys[j].replyToName + "：</span>\
                        <span class='replycon'>" + obj.content[i].replys[j].content + "</span></div>");
							$(".replyscon" + i).append(newReply);
						}
					}
					if(obj.content[i].replys.length > 2) {
						b = obj.content[i].replys.length;
						huifu(b)
						$(".replyscon" + i).height(50);
						$(".replyscon" + i).css({
							"overflow-y": "hidden"
						})
						var mores = $("<div class='mores'>查看更多评论>></div>");
						$(".replys" + i).append(mores);
						$(".mores").on("click", function() {
							if(flag == true) {
								$(this).prev().height('auto');
								$(this).prev().css({
									"overflow-y": "auto"
								})
								flag = false;
							} else {
								$(this).prev().height(50);
								$(this).prev().css({
									"overflow-y": "hidden"
								})
								flag = true;
							}
						})

					} else {
						b = obj.content[i].replys.length;
						huifu(b);
					}

				}

				var timestamp3 = obj.content[i].createdTime;
				var newDate = new Date(timestamp3);
				gap(newDate.toString(), $('.comtime'));
			}

		}
	});
})
