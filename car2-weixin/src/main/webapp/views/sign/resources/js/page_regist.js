$(document).ready(function(){

	//获取JS传递的语言参数
	var utils = new Utils();
	var args = utils.getScriptArgs()
	//隐藏Loading/注册失败 DIV
	$(".loading").hide();
	$(".login-error").hide();
	registError = $("<label class='error repeated'></label>");

	//加载国际化语言包资源
	utils.loadProperties(args.lang);
	//输入框激活焦点、移除焦点
	jQuery.focusblur = function(focusid) {
		var focusblurid = $(focusid);
		var defval = focusblurid.val();
		focusblurid.focus(function(){
			var thisval = $(this).val();
			if(thisval==defval){
				$(this).val("");
			}
		});
		focusblurid.blur(function(){
			var thisval = $(this).val();
			if(thisval==""){
				$(this).val(defval);
			}
		});

	};
	/*下面是调用方法*/
	$.focusblur("#names");

	//获取表单验证对象[填写验证规则]
	var validate = $("#signupForm").validate({
		rules: {
			names:{
				required: true
			},
			company: {
				required: true
			},
			tel: {
				required: true,
				digits:true,
				minlength: 11,
				maxlength: 11,
			},
			contact:{
				required: true
			}

		},
		messages: {
			names: {
				required: $.i18n.prop("请输入姓名")
			},
			company: {
				required: $.i18n.prop("请输入单位")
			},
			tel: {
				required: $.i18n.prop("请输入电话"),
				digits: $.i18n.prop("请输入数字"),
				minlength: jQuery.format($.i18n.prop("电话少于11位")),
				maxlength: jQuery.format($.i18n.prop("电话大于11位"))
			},
			contact:{
				required: $.i18n.prop("请输入邀请人")
			}
		}
	});


	//输入框激活焦点、溢出焦点的渐变特效
	if($("#names").val()){
		$("#names").prev().fadeOut();
	};
	$("#names").focus(function(){
		$(this).prev().fadeOut();

	});
	$("#names").blur(function(){
		if(!$("#names").val()){
			$(this).prev().fadeIn();

		};
	});

	if($("#contact").val()){
		$("#contact").prev().fadeOut();
	};
	$("#contact").focus(function(){
		$(this).prev().fadeOut();
	});
	$("#contact").blur(function(){
		if(!$("#contact").val()){
			$(this).prev().fadeIn();
		};
	});
	if($("#company").val()){
		$("#company").prev().fadeOut();

	};
	$("#company").focus(function(){
		$(this).prev().fadeOut();
		$(".full").eq(1).fadeIn();
	});
	$("#company").blur(function(){
		if(!$("#company").val()){
			$(this).prev().fadeIn();
			$(".full").eq(1).fadeIn();
		};
	});
	if($("#tel").val()){
		$("#tel").prev().fadeOut();
	};
	$("#tel").focus(function(){
		$(this).prev().fadeOut();
	});
	$("#tel").blur(function(){
		if(!$("#tel").val()){
			$(this).prev().fadeIn();
		};

	});
	if($("#zhiwei").val()){
		$("#zhiwei").prev().fadeOut();
	};
	$("#zhiwei").focus(function(){
		$(this).prev().fadeOut();
	});
	$("#zhiwei").blur(function(){
		if(!$("#zhiwei").val()){
			$(this).prev().fadeIn();
		};
	});
	if($("#dpd1").val()){
		$("#dpd1").prev().fadeOut();
	};
	$("#dpd1").focus(function(){
		$(this).prev().fadeOut();
	});
	$("#dpd1").blur(function(){
		if(!$("#dpd1").val()){
			$(this).prev().fadeIn();
		};
	});
	if($("#dpd2").val()){
		$("#dpd2").prev().fadeOut();
	};
	$("#dpd2").focus(function(){
		$(this).prev().fadeOut();
	});
	$("#dpd2").blur(function(){
		if(!$("#dpd2").val()){
			$(this).prev().fadeIn();
		};
	});
	$("#YES").focus(function () {
	    $(".lives").show();
	})
	$("#NO").focus(function () {
	    $(".lives").hide();
		$("#dpd1").val("");
		$("#dpd2").val("");
		$(".comstay").show();
		$(".comstay1").show();

	})

	$("#submit").on("click",function () {
		sign(validate);
	})
	function sign(validate) {
		if (validate.form()) {
			var signName=$("#names")[0].value;
		    var signDanwei=$("#company")[0].value;
		    var signZhiwei=$("#zhiwei")[0].value;
		    var tele=$("#tel")[0].value;
		    var zhusu=false;
		    if ($("#YES")[0].checked==true) {
		        zhusu=true;
		        var comTime=$("#dpd1")[0].value;
		        var comeOut=$("#dpd2")[0].value;
		        var timestamp1 = Date.parse(new Date(comTime))/1000;
		        var timestamp2 = Date.parse(new Date(comeOut))/1000;
		    }

		    var inviter=$("#contact")[0].value;
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

		     if (signName==" "||signDanwei==" "||tele==" "||forums.length==0) {
				 alert("请完整信息")
		     }else if ($("#YES")[0].checked==true) {
				 if (comTime==""||comeOut=="") {
					alert("请完整信息")
				}else {
					changes(signMessages);
				}
		     }else {
				 changes(signMessages);
		     }
		}

	}
	function changes(signMessages) {
		$.ajax({
		   type: "post",
		   url: "../../signtemp",
		   data: signMessages,
		   dataType: "json",
		   contentType: "application/json; charset=utf-8",
		   success: function (obj) {
			   alert("报名成功")
			   window.location.reload();
		   }
	   });
	}

	$("body").each(function(){
		$(this).keydown(function(){
			if(event.keyCode == 13){
				// regist(validate);
				sign(validate);
			}
		});
	});

});
var Utils = function(){};
Utils.prototype.loadProperties = function(lang){
	jQuery.i18n.properties({// 加载资浏览器语言对应的资源文件
		name:'ApplicationResources',
		language: lang,
		path:'resources/i18n/',
		mode:'map',
		callback: function() {// 加载成功后设置显示内容
		}
	});
};

Utils.prototype.getScriptArgs = function(){//获取多个参数
    var scripts=document.getElementsByTagName("script"),
    //因为当前dom加载时后面的script标签还未加载，所以最后一个就是当前的script
    script=scripts[scripts.length-1],
    src=script.src,
    reg=/(?:\?|&)(.*?)=(.*?)(?=&|$)/g,
    temp,res={};
    while((temp=reg.exec(src))!=null) res[temp[1]]=decodeURIComponent(temp[2]);
    return res;
};
