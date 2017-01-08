$(function() {
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
	$.ajax({
		type: "get",
		url: "/app2/article/" + id,
		dataType: "json",
		success: function(obj) {
			var timestamp3 = obj.createdTime;
			var newDate = new Date(timestamp3);
			gap(newDate.toString(), $(".arttime"));
			$("title").html(obj.title);
			$(".article-title").html(obj.title);
			$(".detail-tag1").html(obj.tagName);
			$(".author").html(obj.principal);
			$(".detail-Img img").attr('src', obj.image);
			$(".shareimg").attr('src', obj.image+'?x-oss-process=image/resize,m_fixed,h_375,w_375')
			$(".artiDetail-con").html(obj.content);
			$(".comment-count h4").html("评论(" + obj.commentCount + ")")
		}
	});
	var flag = true;
	$.ajax({
		type: "get",
		url: "/app2/comment",
		data: {
			target: "article",
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
					"<img  src='" + obj.content[i].createrHeadimgurl + "' />" +
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
					"<div class='replys'><div class='replys" + i + "'>"+
					"<div class='replyscon" + i + "'></div>"+
					"<div class='replyscons"+i+"'></div>"+
					"</div>" +
					"</div>")
				$(".comments").append(comcon);
				if(obj.content[i].replys.length != 0) {
					$(".replys" + i).css({
						"background": "#F3F3F3",
						"margin-left": " 40px",
						"width": "311px",
						"font-size": "14px",
						"margin-top": "12px",
						"color": "#9B9B9B"
					})

					function huifu(b) {
						for(var j = 0; j < b; j++) {
							var newReply = $("<div class='replyList'><span class='nickname'>" + obj.content[i].replys[j].createrName + "</span>\
                        <span>回复</span>\
                        <span>" + obj.content[i].replys[j].replyToName + "：</span>\
                        <span class='replycon'>" + obj.content[i].replys[j].content + "</span></div>");
							$(".replyscon" + i).append(newReply);
						}
					}
					function huifuMore(max) {
						for(var j = 2; j <max; j++) {
							var newReply = $("<div class='replyList'><span class='nickname'>" + obj.content[i].replys[j].createrName + "</span>\
                        <span>回复</span>\
                        <span>" + obj.content[i].replys[j].replyToName + "：</span>\
                        <span class='replycon'>" + obj.content[i].replys[j].content + "</span></div>");
							$(".replyscons" + i).append(newReply);
						}
					}

					if(obj.content[i].replys.length > 2) {
						b=2;
						huifu(b);
						huifuMore(obj.content[i].replys.length);
						$(".replyscons" + i).css('display','none');
						var mores = $("<div class='mores'>查看更多评论>></div>");
						$(".replys" + i).append(mores);
						$(".mores").on("click", function() {
							if(flag == true) {
								$(this).prev().show();
								flag = false;
							} else {
								$(this).prev().hide();
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
