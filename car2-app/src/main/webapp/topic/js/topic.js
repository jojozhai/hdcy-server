$(function() {
	Date.prototype.Format = function(format) {
		format ? format : format = "yyyy-MM-dd ";
		var o = {
			"M+": this.getMonth() + 1, // month
			"d+": this.getDate(), // day
			"h+": this.getHours(), // hour
			"m+": this.getMinutes(), // minute
			"s+": this.getSeconds(), // second
			"q+": Math.floor((this.getMonth() + 3) / 3), // quarter
			"S": this.getMilliseconds()
		};
		if(/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + "").slice(4 - RegExp.$1.length));
		}
		for(var k in o) {
			if(new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length));
			}
		}
		return format;
	};

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
		type: "get",
		url: "/app2/contrary/483851",
		dataType: "json",
		success: function(obj) {
			$(".topic-img").attr('src', obj.image);
			$(".topic-tit").html(obj.name);
			$(".topic-con").html(obj.desc);
			var counts = obj.redCount / (obj.blueCount + obj.redCount) * 100;
			$(".red-num").css('width', counts + "%");
			$(".blue-num").css('width', (100 - counts) + "%");
			$(".redtopic-num").html(obj.redCount);
			$(".bluetopic-num").html(obj.blueCount);
			$(".redtopic").html("观点：" + obj.redButton);
			$(".bluetopic").html("观点：" + obj.blueButton)
		}
	});
	$(".con-downs").on('click', function() {
		$(".topic-con").css('height', 'auto');
		$(".con-ups").css('display', 'inline-block');
		$(".con-downs").hide();
	})
	$(".con-ups").on('click', function() {
		$(".topic-con").css('height', '60px');
		$(".con-downs").css('display', 'inline-block');
		$(".con-ups").hide();
	})
	var pageStart = 0,
		pageEnd = 0,
		page = -1;
	$(".topic-cons").dropload({
		scrollArea: window,
		loadDownFn: function(me) {
			page++;

			$.ajax({
				type: "get",
				url: "/app2/contraryParticipator",
				data: {
					contraryId: '483851',
					page: "0",
					size: '10',
					sort: 'createdTime,desc'
				},
				dataType: "json",
				success: function(obj) {
					console.log(obj)
					pageStart = page;
					pageEnd = pageStart + 1;
					var suportnum;
					var j = -1,
						x = -1;
					for(var i = pageStart; i < pageEnd; i++) {
						suportnum = obj.red.content.concat(obj.blue.content).length;
						for(var i = 0; i < suportnum; i++) {
							if(i % 2 == 0) {
								j++;
								if(j < obj.red.content.length) {
									var createdTime = new Date(obj.red.content[j].createdTime);
									var liodd = $('<li class="redsupport-list clear">' +
										'<img class="redsupport fl" src="' + obj.red.content[j].headimgurl + '"/>' +
										'<div class="redsupport-cons fl">' +
										'<div class="redsup-nickname"></div>' +
										'<div class="redsupport-con">' +
										'<span>' + obj.red.content[j].content + '</span>' +
										'<div class="redsup-time">' + createdTime.Format() + '</div>' +
										'</div>' +
										'</div>' +
										'</li>');
									$(".topic-cons").append(liodd);
								}

							} else {
								x++;
								if(x < obj.blue.content.length) {
									var lieven = $('<li class="bluesupport-list clear">' +
										'<img class="bluesupport fr" src="img/huati.png"/>' +
										'<div class="bluesupport-cons fr">' +
										'<div class="bluesup-nickname"></div>' +
										'<div class="redsupport-con">' +
										'<span>' + obj.blue.content[j].content + '</span>' +
										'<div class="redsup-time">2016-03-12</div>' +
										'</div>' +
										'</div>' +
										'</li>');
									$(".topic-cons").append(lieven);
								}

							}
						}
						if((i + 1) >= suportnum) {
							// 锁定
							me.lock();
							// 无数据
							me.noData();
							break;
						}
					}
					setTimeout(function() {
						me.resetload();
					}, 400);
				}
			});

		}
	})
	$(".support-red").on('click', function() {
		$(".topic-mes").show();
		$(".votes-tit").html()
	})
	$(".support-blue").on('click', function() {
		$(".topic-mes").show();
	})
})