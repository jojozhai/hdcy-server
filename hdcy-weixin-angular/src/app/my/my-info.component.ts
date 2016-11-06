/**
 * Created by zhailiang on 16/10/24.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../shared/service/user.service";
import {WeixinService} from "../shared/service/weixin.service";

@Component({
  selector: 'my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my.module.css']
})
export class MyInfoComponent implements OnInit {
  user;
  tag;
  type;
  closes;
  editbg;
  year;
  month;
  detailboxHeight: number = document.body.clientHeight - 48;

  constructor(private userService: UserService, private weixinService: WeixinService) {
    this.weixinService.fileUploadFinishEvent.subscribe(url => {
      console.log("url is:" + url);
      this.userService.setUserProperty({name: 'headimgurl', value: url}).subscribe(
        res => this.ngOnInit()
      );
    });
  }

  ngOnInit() {
    this.userService.getCurrentUserInfo().subscribe(
      res => this.user = res.json(),
      err => this.userService.handleException(err)
    );
//  城市编辑
    $('body').on('click', '.city-list p', function () {
		var type = $('.container').data('type');
		// $('#zone_ids').html($(this).html()).attr('data-id',$(this).attr('data-id'));
	//	$('body').html($(this).html()).attr('data-id', $(this).attr('data-id'));

	  console.log($(this).html());

	  $('.container').hide();
	  $('.editbg').hide()
	});
	$('body').on('click', '.letter a', function () {
		var s = $(this).html();
		$(window).scrollTop($('#' + s + '1').offset().top);
	});
	var newyear=(new Date()).getFullYear();
	for (var i=1970;i< newyear;i++) {
		var ops=$("<option value="+i+"年>"+i+"年</option>");
		$('.year').append(ops);
	}
	for (var j=1;j<=12;j++) {
		if (j<10) {
			var opsri=$("<option value=0"+j+"月>0"+j+"月</option>");
		}else {
			var opsri=$("<option value="+j+"月>"+j+"月</option>");
		}
		$('.month').append(opsri);
	}

	$(".like-list a").on('click',function () {
		if ($(".like-list .actived").length<5) {
			if ($(this).hasClass('actived')) {
				$(this).removeClass('actived');
			}else if ($(this).hasClass('monys')) {
				$(".editbgs").show();
				$(".monys-select").show();
				$(".gao").on('click',function(){
					$(".editbgs").hide();
					$(".monys-select").hide();
					$(".monys").addClass('actived');
				})
				$(".loser").on('click',function(){
					$(".editbgs").hide();
					$(".monys-select").hide();
				})
			}else {
				$(this).addClass('actived');
			}
		}

	})

  }

  uploadHeadImg() {
    this.weixinService.fileUpload();
  }


//个人资料
  edit(type, year, month) {
    this.type = type;
    if (this.type != 'cars') {
      this.editbg = "block";
    }
    if (this.type == 'nicks') {
      console.log(this)
    }
    if (this.type == 'citys') {
      $('html,body').css({
        height: 'auto',
        overflow: 'scroll',
      })
    }
    if (this.type == 'births') {
      $(".datas .year").val($(".birthday").html().substring(0, 5));
      $(".datas .month").val($(".birthday").html().substring(5));
    }
    if (this.type == 'likes') {
      var num = 0
    }
  }

//手机号
  nextstep() {
    $(".step2").show();
    $(".tel-bg").show();
    $(".queren-num").html($(".tel-num input").val());
  }

  cancel() {
    $(".step2").hide()
  }

  confirm() {
    $(".step1").hide();
    $(".step2").hide();
    $(".tel-bg").hide();
    $(".step3").show();
    $(".telphon-num input").val($(".tel-num input").val())
    var seconds = 60;
    var timer = setInterval(function () {
      seconds--;
      // if (seconds <= 0) {
      //   clearInterval(timer);
      //   $(".code-mes").html("重新发送");
      // } else {
      //   $(".code-mes").html(seconds);
      // }
    }, 1000)
  }

  resend() {
    var seconds = 60;
    var timer = setInterval(function () {
      seconds--;
      // if (seconds <= 0) {
      //   clearInterval(timer);
      //   $(".code-mes").html("重新发送");
      // } else {
      //   $(".code-mes").html(seconds);
      // }
    }, 1000)
  }

//电话验证码提交
  telscode() {
    $(".telsboxs").hide();
    $(".editbg").hide();
  }

//密码提交
  passcom() {
    $(".passboxs").hide();
    $(".editbg").hide();
  }

//出生年月编辑
  birthSave() {
    var year = $(".datas .year").val();
    var month = $(".datas .month").val();
    console.log(year + month)
  }

//昵称
  clearnick() {
    $(".nicks input").val("");
  }

  commitnick() {
    $(".nicks input").val();
    console.log($(".nicks input").val())
  }

//车型
  close() {
    this.type = "none";
    this.editbg = "none";
  }

  huoqu() {
    this.type = "none";
    console.log(event.target['innerHTML']);
  }


}
