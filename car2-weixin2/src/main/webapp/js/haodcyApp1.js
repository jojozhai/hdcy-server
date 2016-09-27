$(function () {
    var counter=0;
    // 每页展示15个
    var size=20;
    var pageStart=0,pageEnd=0,page=-1;

    $(".cnts").dropload({
        scrollArea:window,
        loadDownFn:function (me) {
            page++;
            console.log(page);
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
                    // counter++;
                    // pageEnd = size * counter;
                    // pageStart = pageEnd - size;
                    // console.log(pageStart)
                    // console.log(pageEnd)
                    // for(var i = pageStart; i < pageEnd; i++){
                    //     if (obj.content[i].top==true) {
                    //         videoImg+="<div class='swiper-slide'><a href='videoDetail.html?id="+obj.content[i].id+"'><img src="+obj.content[i].image+" alt=/></a></div>";
                    //
                    //     }else {
                    //         videoImg1+="<a href='videoDetail.html?id="+obj.content[i].id+"'>\
                    //         <li><img src="+obj.content[i].image+" alt=/></li>\
                    //         </a>";
                    //     }
                    //
                    //     if((i + 1) >= obj.content.length){
                    //         // 锁定
                    //         me.lock();
                    //         // 无数据
                    //         me.noData();
                    //         break;
                    //     }
                    // }
                    // // 为了测试，延迟1秒加载
                    // setTimeout(function(){
                    //     $(".video-up .swiper-wrapper").append(videoImg);
                    //     $(".video-down").append(videoImg1);
                    //     // 每次数据加载完，必须重置
                    //     me.resetload();
                    // },1000);
                    for (var i = 0; i < obj.content.length; i++) {
                        if (obj.content[i].top==true) {
                            videoImg+="<div class='swiper-slide'><a href='videoDetail.html?id="+obj.content[i].id+"'><img src="+obj.content[i].image+" alt=/></a></div>";
                            // $(".video-up .swiper-wrapper").append(videoImg);
                        }else {
                            videoImg1="<a href='videoDetail.html?id="+obj.content[i].id+"'>\
                            <li><img src="+obj.content[i].image+" alt=/></li>\
                            </a>";
                            // $(".video-down").append(videoImg1);
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
                    setTimeout(function(){
                        // $(".video-up .swiper-wrapper").append(videoImg);
                        // $(".video-down").append(videoImg1);
                        // 每次数据加载完，必须重置
                        me.resetload();
                    },1000);

                }

            });
        }
    })


})
