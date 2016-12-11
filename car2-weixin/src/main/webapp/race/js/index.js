var allImg = ["image/bg.jpg","image/arrom.png","image/cheyou.png","image/home-bg.png","image/start.png","image/left.png","image/right.png","image/one.png","image/two.png","image/three.png","image/logo.gif"];
var loadOver = [];
loadOver = loadImg(allImg,function(){
	$(".loading").hide();
	home();
})

function home () {
	$(".home").show()
}

function loadImg(arr,fn){
	var arr1 = [];
   	var index = 0;
    var arr2 = [];
    for(var i=0; i<arr.length; i++){
    	var imgObj = new Image();
    	imgObj.src = arr[i];
    	imgObj.index = i;
    	imgObj.onload = function(){
			index++;
			$("#loading .text p").eq(1).html(Math.ceil(index/allImg.length*100)+'%');
			$("#loading .load_wrap .loadPer").width(Math.ceil(index/allImg.length*100)+'%');
    		arr1.push(this);
    		if(index>arr.length-1){
    			for(var i=0; i<arr1.length;i++){
    				for(var j=0; j<arr1.length; j++){
    					if(arr1[j].index == i){
    						arr2.push(arr1[j]);
    					}
    				}
    			}
    			if(fn){
    				fn();
    			}
    		}
    	}
    }
    return arr2;
}
$(".start").on('click',function () {
	$(".home").hide();
//	$("#canva1").show();
//	$("#canva2").show();
	$(".game").show()
	game();
})

function game () {
	var canvas1=document.getElementById("canva1")	
	var context = canvas1.getContext("2d");
	var body = document.getElementsByTagName("body")[0];
	canvas1.width = body.offsetWidth/2;
	canvas1.height = body.offsetHeight;
	
	var canvas2=document.getElementById("canva2")	
	var context2 = canvas2.getContext("2d");
	var body = document.getElementsByTagName("body")[0];
	canvas2.width = body.offsetWidth/2;
	canvas2.height = body.offsetHeight;
	
	console.log(canvas2.width,canvas1.width)
	var bgH = canvas1.height/canvas1.width*600;	
	var bgImg = {
		y:0,
		draw:function (){
			context.drawImage(loadOver[5],0,this.y,canvas1.width,bgH);
			context.drawImage(loadOver[5],0,this.y-bgH,canvas1.width,bgH);
			console.log(this.y-bgH)
		},
		move:function (){
			this.y++;
			if (this.y>=bgH){
				this.y = 0;
			}
		}
	}	
	var bgImg1 = {
		y:0,
		draw:function (){
			context2.drawImage(loadOver[6],0,this.y,canvas2.width,bgH);
			context2.drawImage(loadOver[6],0,this.y-bgH,canvas2.width,bgH);
			console.log(this.y-bgH)
		},
		move:function (){
			this.y++;
			if (this.y>=bgH){
				this.y = 0;
			}
		}
	}
	
	
	bgImg.draw();
	bgImg1.draw()
	
}

function randFn(min,max){		
	return parseInt(Math.random()*(max-min)+min);
}


