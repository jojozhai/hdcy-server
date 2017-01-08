$(function () {	
	function GetRequest() {
		var url = location.search;
		var theRequest = new Object();
		if(url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for(var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	}
	var Request = new Object();
	Request = GetRequest();
	var id = Request.id;
	$(".back").attr('href','activityDetail-weixin.html?id='+id)
	var num=70;
	$(".commentArea").on('keyup',function () {
		num=70-$(this).val().length;
		$(".signnum").html(num);		
	})
	$(".comment-fs").on('click',function(){
		if ($(".name-input").val()==""||$(".tel-input").val()=="") {
			alert("请填写完整信息");
		}else if ($(".tel-input").val().length>11||$(".tel-input").val().length<11) {
			alert("请填写正确的手机号");	
		}else {
			var createdtime = new Date().getTime();
			$.ajax({
				type:"post",
				url:"/weixin2/activityParticipator",
				data:{
					realname:$(".name-input").val(),
					mobile:$(".tel-input").val(),
					createdTime:createdtime
				},
				dataType: "json",
				success: function(obj) {
					
				}
			});
		}
	})
})