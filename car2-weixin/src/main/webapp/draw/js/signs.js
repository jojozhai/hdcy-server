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
  var sex;
  $(".qiusign").on('click',function () {
    $(".page1").hide();
    $(".page2").show();
    var name=$(".names").val();
    // $(".drawname").html(name+"2017年的新年签");
    if (man==1) {
      sex=1;
    }else {
      sex=2;
    }
    $.ajax({
    	type: "get",
    	url: "../game/draw/lots",
      data:{
        name:name,
        sex:sex,
      },
    	dataType: "json",
    	success: function(data) {
        console.log(data.content);
        // $(".newyear").attr('src',data.content);
        $(".page2").css({
          'background':"url("+data.content+")",
          "background-size":"100% 100%"
        })
    	}

  })

  })
})
