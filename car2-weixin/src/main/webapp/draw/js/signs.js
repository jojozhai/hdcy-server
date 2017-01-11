$(function () {
  $(".enter").on('click',function () {
    $(".page").hide();
    $(".page1").show();
  })
  var man=0;
  var woman=0;
  $(".man").on('click',function () {
    $(".man").hide();
    $(".woman1").hide();
    $(".woman").show();
    $(".man1").show();
    man=1;
    woman=0;
  })
  $(".woman").on('click',function () {
    $(".woman").hide();
    $(".man").show();
    $(".man1").hide();
    $(".woman1").show();
    man=0;
    woman=1;
  })
  $(".qiusign").on('click',function () {
    if (man==1) {
      console.log('男');
    }else {
      console.log('女');
    }
    $.ajax({
    	type: "get",
    	url: "../game/draw/lots",
      data:{
        name:'小名',
        sex:'女',
      },
    	dataType: "json",
    	success: function(data) {
          console.log(data);
    	}

  })

  })
})
