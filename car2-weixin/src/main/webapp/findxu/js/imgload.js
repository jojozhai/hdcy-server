$(function() {
		var imgSrc = ["img/loading_bg.png", "img/loading_xuzheng.png", "img/loading_txt.png"];
		//  for (var i = 0; i < 24; i++) {
		//  	imgSrc.push('img/' + i + '.png');
		//  };
		var loaded = 0;
		var percent=0;
		for (var i = 0; i < imgSrc.length; i++) {
			var img = new Image();
			img.onload = function() {
				loaded++;
				percent = parseInt(loaded / imgSrc.length)

					$('.page1 .txt').css({
						// transform: "rotateZ(360deg)",
						// transition:"all 1s linear ",
						animation:"lodaing 10s linear infinite"
					})
					if (percent == 1) {
						$('.page1').css('display', 'none');
						$('.page2').css('display', 'block');
						// myScroll = new IScroll('#wra', { mouseWheel: true, click: true,bounce:false });
					}
			}
			img.src = imgSrc[i];
		}



	})
