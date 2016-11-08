 $(function() {
 	$.ajax({
 		type: "get",
 		url: "/app2/video/633120",
 		dataType: "json",
 		success: function(obj) {
 			$(".title").html(obj.name);
 			$(".zhiiboa-video video").attr('src', obj.url2);
 			$(".zhibo-icon img").attr('src', obj.sponsorImage);
 			$(".video-name1").html(obj.sponsorName);
 			$(".video-desc").html(obj.desc); 			
 		} 		
 	}); 	
 	$(".video-descom").height($(document).height()-250) 	

 	$.ajax({
 		type: "get",
 		url: "/app2/comment",
 		data: {
 			target: "video",
 			targetId: "633120",
 			size: "5",
 			withReply: "true",
 			sort: "createdTime,desc"
 		},
 		dataType: "json",
 		success: function(obj) { 			
 			var gap = function(date, creatime) { 				
 				var now = new Date;
 				var that =new Date (date);
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
 					"</div>")
 				$(".comments").append(comcon);
 				var timestamp3 = obj.content[i].createdTime;
				var newDate = new Date(timestamp3);
       			gap (newDate.toString(), $ ('.comtime'));
 			}

 		}
 	});
 	
 	
 })