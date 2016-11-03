 $(function(){
 	$.ajax({
 		type:"get",
 		url:"/app2/video/633120",
 		dataType: "json",
        success: function (obj) {
           $(".title").html(obj.name);
           $(".zhiiboa-video video").attr('src',obj.url2);
           $(".zhibo-icon img").attr('src',obj.sponsorImage);
           $(".video-name1").html(obj.sponsorName);
           $(".video-desc").html(obj.desc)
        }
 	});
 	
 	$.ajax({
 		type:"get",
 		url:"/app2/comment",
 		data:{
 			target:"video",
 			targetId:"633120",
 			size:"5",
 			withReply:"true",
 			sort:"createdTime,desc" 			
 		},
 		dataType: "json",
        success: function (obj) {
        	for (var i=0;i<obj.content.length;i++) {   
        		console.log(obj.content[i].createrHeadimgurl)
        		var comcon=$("<div class='comsList'>"+
						"<div class='comsup clear'>"+
							"<div class='comsupLeft fl'>"+
								"<img  src="+obj.content[i].createrHeadimgurl+"/>"+
							"</div>"+
							"<div class='comsupRight fl'>"+
								"<div class='clear'>"+
									"<span class='nickname fl'>"+obj.content[i].createrName+"</span>"+
									"<div class='zandes fr'>"+
										"<span class='zan '></span>"+
										"<span class='zancount '>"+obj.content[i].praiseCount+"</span>"+
									"</div>"+									
								"</div>"+
								"<span class='comtime'>"+obj.content[i].createdTime+"</span>"+
							"</div>"+
						"</div>"+
						"<div class='comcontent'>"+obj.content[i].content+"</div>"+
					"</div>")
        		$(".comment").append(comcon);
        	}
        	
           
        }
 	});
 })
