$(".plan").focus(function () {
    $(".lives").show()
})
$(".plan1").focus(function () {
    $(".lives").hide()
})
var flag=true;
$(".sign-name").blur(function () {
    if ($(".sign-name")[0].value=="") {
        $(".full").eq(0).show();
        flag=true;
    }else {
        $(".full").eq(0).hide();
        flag=false;
    }
})
$(".sign-danwei").blur(function () {
    if ($(".sign-danwei")[0].value=="") {
        $(".full").eq(1).show();
        flag1=true;
    }else {
        $(".full").eq(1).hide();
        flag1=false;
    }
})
$(".sign-tel").blur(function () {
    var reg=/^(13\d|14[57]|15([0-3]|[5-9])|17[07]|18\d)\d{8}$/;
    var res=reg.test($(".sign-tel")[0].value);
    if (res==true) {
        $(".tel-true").hide();
        flag2=false;
    }else {
        $(".tel-true").show();
        flag2=true;
    }
})
$(".signs").on("click",function () {
    var signName=$(".sign-name")[0].value;
    var signDanwei=$(".sign-danwei")[0].value;
    var signZhiwei=$(".sign-zhiwei")[0].value;
    var tele=$(".sign-tel")[0].value;
    var zhusu=false;
    if ($(".plan")[0].checked==true) {
        zhusu=true;
        var comTime=$("#dpd1")[0].value;
        var comeOut=$("#dpd2")[0].value;
        var timestamp1 = Date.parse(new Date(comTime))/1000;
        var timestamp2 = Date.parse(new Date(comeOut))/1000;
    }
    var inviter=$(".invite")[0].value;
    var forums=[];
    for (var i = 0; i < $("input[name='luntan']").length; i++) {
        if ($("input[name='luntan']")[i].checked==true) {
            forums[i]=$("input[name='luntan']")[i].value;
        }
    }
    var signMessage={
            name:signName,
            company:signDanwei,
            title:signZhiwei,
            mobile:tele,
            stay:zhusu,
            stayStartTime:timestamp1,
            stayEndTime:timestamp2,
            inviter:inviter,
            forums:forums
        }
    var signMessages=JSON.stringify(signMessage);
     if (flag==true||flag1==true||flag2==true) {
         alert("报名失败")
     }else {
         $.ajax({
            type: "post",
            url: "../../signtemp",
            data: signMessages,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (obj) {
                alert("报名成功")
            }
        });
     }

})
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

var checkin = $('#dpd1').datepicker({
  onRender: function(date) {
    return date.valueOf() < now.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function(ev) {
  if (ev.date.valueOf() > checkout.date.valueOf()) {
    var newDate = new Date(ev.date)
    newDate.setDate(newDate.getDate() + 1);
    checkout.setValue(newDate);
  }
  checkin.hide();
  $('#dpd2')[0].focus();
}).data('datepicker');
var checkout = $('#dpd2').datepicker({
  onRender: function(date) {
    return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
  }
}).on('changeDate', function(ev) {
  checkout.hide();
}).data('datepicker');
