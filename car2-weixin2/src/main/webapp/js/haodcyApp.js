$(function () {
    var pageStart=0,pageEnd=0,page=-1;
    $(".cnts").dropload({
        scrollArea:window,
        loadDownFn:function (me) {
            page++;
            $.ajax({
                type: "GET",
                url: "/weixin2/video",
                data: {
                    page:page,
                },
                dataType: "json",
                success: function (obj) {
                    var videoImg='';
                    var videoImg1='';
                    pageStart = page;
                    pageEnd = pageStart+1;
                    for(var i = pageStart; i < pageEnd; i++){
                        for (var j = 0; j < obj.content.length; j++) {
                            if (obj.content[j].top==true) {
                                videoImg+="<div class='swiper-slide'><a href='videoDetail.html?id="+obj.content[j].id+"'><img src="+obj.content[j].image+" alt=/></a></div>";
                            }else {
                                videoImg1+="<a href='videoDetail.html?id="+obj.content[j].id+"'>\
                                <li><img src="+obj.content[j].image+" alt=/></li>\
                                </a>";
                            }

                        }
                        $(".video-up .swiper-wrapper").append(videoImg);
                        $(".video-down").append(videoImg1);
                        var mySwiper = new Swiper(' .video-up .swiper-container',{
                            pagination: '.swiper-pagination',
                            paginationClickable: true,
                            autoplay : 5000,
                            centeredSlides: true,
                            slidesPerView: 1.1,
                            watchSlidesProgress : true,
                            watchSlidesVisibility : true,
                            watchActiveIndex: true,
                        })
                        if((i + 1) >= obj.content.length){
                            // 锁定
                            me.lock();
                            // 无数据
                            me.noData();
                            break;
                        }
                    }
                    setTimeout(function(){
                        me.resetload();
                    },400);


                }

            });
        }
    })


})
