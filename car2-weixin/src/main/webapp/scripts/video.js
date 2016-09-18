$(".cnt").width($("body").width());
 var mySwiper = new Swiper(' .device .swiper-container',{
    centeredSlides: true,//居中
    slidesPerView: 1.5,
    watchActiveIndex: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
})
$(".device .swiper-slide").removeClass("swiper-slide-active");
$(".device .swiper-slide:nth-of-type(1)").addClass("swiper-slide-active");
