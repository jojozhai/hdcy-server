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
	$.ajax({
		type:"get",
		url:"/app2/leader/"+id,
		dataType: "json",
		success: function(obj) {			
			$(".dakade-Img img").attr('src',obj.image);
			$(".dakade-name").html(obj.name);
			$(".dakalv").html("LV"+obj.level);
			$(".dakade-slogan").html(obj.slogan);
			console.log()
			for (var i=0;i<obj.tags.split(',').length;i++) {
				var tag=$('<div class="dakde-tag">'+obj.tags.split(',')[i]+'</div>')
				$(".dakde-tags").append(tag)
			}
			$(".daka-contxt").html(obj.intro);
		}
		
	});
})
