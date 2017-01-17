$(function() {
	var page = 1;
	drawpage(page);

	function drawpage(pages) {
		$.ajax({
			type: "get",
			url: "../game/draw/lots/statistics",
			data: {
				number: pages,
			},
			dataType: "json",
			success: function(data) {}

		})
	}
	$(".enter").on('click', function() {
		$(".page").hide();
		$(".page1").show();
		page = 2;
		drawpage(page);
	})
	var man = 0;
	var woman = 0;
	$(".man").on('click', function() {
		$(".man").hide();
		$(".woman1").hide();
		$(".woman").show();
		$(".man1").show();
		man = 1;
		woman = 0;
	})
	$(".woman").on('click', function() {
		$(".woman").hide();
		$(".man").show();
		$(".man1").hide();
		$(".woman1").show();
		man = 0;
		woman = 1;
	})
	var sex;
	$(".qiusign").on('click', function() {
		$(".page1").hide();
		$(".page2").show();
		page = 3;
		drawpage(page);
		var name = $(".names").val();
		if(man == 1) {
			sex = 1;
		} else {
			sex = 2;
		}
		$.ajax({
			type: "get",
			url: "../game/draw/lots",
			data: {
				name: name,
				sex: sex,
			},
			dataType: "json",
			success: function(data) {
				$("#drawimg").attr('src', data.content);
				$(".save").attr('href',data.content)
			}

		})

	})
	
	$(".again").on('click',function  () {
		$(".page2").hide();
		$(".page1").show();
	})
})