$(function(){
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
            if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").slice(4 - RegExp.$1.length));
            }
            for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length));
            }
    }
        return format;
};
       function GetRequest() {
            var url = location.search;
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
                }
            }
            return theRequest;
        }
        var Request = new Object();
        Request = GetRequest();
        var id=Request.id;
        $.ajax({
            type: "GET",
            url: "../app2/activity/"+id,
            data: {},
            dataType: "json",
            success: function (obj) {
            	var newDiv=$("<h1 class='activityTit'>"+obj.name+"</h1>\
            			<div class='activityCon'>"+obj.desc+"</div>");
                var newSpan=$("<span>"+obj.hot+"人</span>");
                $(".participants").append(newSpan);
                $(".article").append(newDiv);

            	var date = new Date(obj.startTime);
                var timess=date.Format();
                var date1 = new Date(obj.signEndTime);
                var sgintime=date1.Format();

                var messageList=$("<li>\
                    <span class='item'>主办方：</span>\
                    <span>"+obj.sponsor+"</span>\
                </li>\
                <li>\
                    <span class='item'>活动时间：</span>\
                    <span>"+timess+"</span>\
                </li>\
                <li>\
                    <span class='item'>报名截止：</span>\
                    <span>"+sgintime+"</span>\
                </li>\
                <li>\
                    <span class='item'>报名人数：</span>\
                    <span>"+obj.peopleLimit+"</span>\
                </li>\
                <li>\
                    <span class='item'>活动费用：</span>\
                    <span>"+obj.price+"</span>\
                </li>\
                <li>\
                    <span class='item'>活动地点：</span>\
                    <span>"+obj.address+"</span>\
                </li>");
                $(".message-list").append(messageList);
                $(".activityImgs").width(obj.images.length*140)
                for (var i = 0; i < obj.images.length; i++) {
                    var newImg=$("<li dataIndex="+i+"><img src="+ obj.images[i]+" alt=''/></li>");
                    $(".activityImgs").append(newImg);
                    var newImg1=$("<div class='swiper-slide' dataIndex="+i+"><img src="+ obj.images[i]+" alt=''/></div>");
                    $(".bigactImg .swiper-wrapper").append(newImg1);
                }

                $(".activityImgs li").on("click",function(){
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

            }

        });

        $.ajax({
            type: "GET",
            url: "../app2/comments",
            data: {
                page:"0",
                size:"30",
                sort:"createdTime,desc",
                target:"activity",
                targetId:id,
            },
            dataType: "json",
            success: function (obj) {
                for (var i = 0; i < obj.content.length; i++) {
                    var dates = new Date(obj.content[i].createdTime);
                    var commentTime=dates.Format();
                    //获取但是时间
                    var date = new Date();
                    var localTime=date.Format('yyyy-MM-dd');
                    if (commentTime.split("-")[0]==localTime.split("-")[0]) {
                         commentTime=dates.Format("MM-dd")
                    }else {
                        commentTime=dates.Format("yyyy-MM-dd")
                    }
                    var newCom=$("<li><div class='commentIcon clear'>"+
                    "<span class='commentIcon1'><img src='"+obj.content[i].createrHeadimgurl+"' alt=/></span>"+
                    "<span class='commentIcon2'>"+
                        "<span class='createrName'>"+obj.content[i].createrName+"</span><br/>"+
                        "<span class='timeago' datetime="+commentTime+">"+commentTime+"</span>"+
                    "</span></div>"+
                    "<div class='commentCon'>\
                    <div>"+obj.content[i].content+"</div>\
                    <div class='replys'><div class='sanjiao'></div>\
                    <div class='replys"+i+"'></div></div>\
                    </div></li>");
                    $(".commentList").append(newCom);
                    if (obj.content[i].replys.length>0) {
                        $(".replys").css({"padding":"10px 0 10px 10px"});
                        $(".sanjiao").css({
                            "border-left": "10px solid transparent",
                        	"border-right": "10px solid transparent",
                        	"border-bottom":"10px solid rgba(155,155,155,0.2)"
                        })
                    }
                    for (var j = 0; j < obj.content[i].replys.length; j++) {
                        var newReply=$("<div class='reply'><span>"+obj.content[i].replys[j].createrName+"</span>\
                        <span>回复"+obj.content[i].replys[j].replyToName+"：</span>\
                        <span>"+obj.content[i].replys[j].content+"</span></div>");
                        $(".replys"+i).append(newReply);
                    }

                }
                var heights=document.documentElement.clientHeight;
                $(".activityContainer").height(heights-55);
            }
        });

        $(".toggle img").on("click",function(){
            if ($(".toggle img").attr("src")=="img/content-up.png") {
                $(".activityCon").height(108);
                $(".toggle img").attr("src","img/content-down.png");
            }else {
                $(".activityCon").height("auto");
                $(".toggle img").attr("src","img/content-up.png");
            }
        })
        $(".sign").on("click",function(){
            $(".QRcode").show();
        })
        $(".QRcode img").on("click",function(){
            $(".QRcode").hide();
        })

})
