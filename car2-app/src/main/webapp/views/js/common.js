$(function(){
	$("nav a").on('click',function () {
		$("nav a").removeClass('artnav-on');
		$(this).addClass('artnav-on');
	})
	
	$('body').on('touchstart',function (e) {	
 		var touch = e.originalEvent,
        startX = touch.changedTouches[0].pageX;
        startY = touch.changedTouches[0].pageY;
       $('body').on('touchmove', function(e) {
                touch = e.originalEvent.touches[0] ||
                    e.originalEvent.changedTouches[0];                
                if (touch.pageY - startY > 10) {                   
                   $(".guanzhu").fadeIn();           
                } else if (touch.pageY - startY < -10) {
                   $(".guanzhu").fadeOut();                  
                };
            });
   	    })
	
	$(".guanzhu-txt span").on("click",function(){
 		$(".chatcode").show();
 		$(".chat").on("click",function(){
 			$(".chatcode").hide();
 		})
 		
 	})
})