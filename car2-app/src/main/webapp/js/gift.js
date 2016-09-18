$(function(){ 
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
        var id=Request.id
        $.ajax({
            type: "GET",
            url: "../app2/gift/"+id,
            data: {},
            dataType: "json",
            success: function (obj) {
                for (var i = 0; i < obj.images.length; i++) {
                    var newImg1=$("<div class='swiper-slide' dataIndex="+i+"><img src="+ obj.images[i]+" alt=''/></div>");
                    $(".giftUp .swiper-wrapper").append(newImg1);
                }
                var newTit=$("<span>"+obj.name+"</span>")
                $(".giftTit").append(newTit);
                var mySwiper = new Swiper ('.swiper-container', {
                   loop: true,
                   pagination: '.swiper-pagination',
                 })
                var newJifen=$("<span class='jifenLeft'>\
                    <i></i>所需积分："+obj.point+"\
                    </span>\
                <span class='jifenRight'>\
                    <i></i>\
                    <span class='giftShu'>\
                        <span>剩余数量："+obj.stock+"个</span><br/>\
                        <span>(已兑换"+obj.used+"个)</span>\
                    </span>\
                </span>")
                $(".jifen").append(newJifen);
                var newCon=$("<p class='giftContent'>"+obj.desc+"</p>");
                $(".giftCon").append(newCon);

            }
        });
        $(".hd-addbtn a").on("click",function(){
            $(".jifenBuzu").show();
            setTimeout(function () {
                $(".jifenBuzu").hide();
            },3000)
        })


})
