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
  user = {};
  originUser;
  tag;
  type;
  editbg;
  detailboxHeight: number = document.body.clientHeight - 48;

  newMobile = '';
  checkcode = '';

  constructor(private userService: UserService, private weixinService: WeixinService) {
    this.weixinService.fileUploadFinishEvent.subscribe(url => {
      console.log("url is:" + url);
      this.userService.setUserProperty({name: 'headimgurl', value: url}).subscribe(
        res => this.ngOnInit()
      );
    });
  }
 

  test(){
    console.log('haha');
  }

  ngOnInit() {
    this.userService.getCurrentUserInfo().subscribe(
      res => {
        this.user = res.json();
        this.originUser = res.json();
      },
      err => this.userService.handleException(err)
    );
//  城市编辑
    $('body').on('click', '.city-list p', function () {
      var type = $('.container').data('type');
      //$('#zone_ids').html($(this).html()).attr('data-id',$(this).attr('data-id'));
      //$('body').html($(this).html()).attr('data-id', $(this).attr('data-id'));
      console.log($(this).html());
      $('.container').hide();
      $('.editbg').hide()
    });
    $('body').on('click', '.letter a', function () {
      var s = $(this).html();
      $(window).scrollTop($('#' + s + '1').offset().top);
    });
    var newyear = (new Date()).getFullYear();
    for (var i = 1970; i < newyear; i++) {
      var ops = $("<option value=" + i + ">" + i + "年</option>");
      $('.year').append(ops);
    }
    for (var j = 1; j <= 12; j++) {
      if (j < 10) {
        var opsri = $("<option value=0" + j + ">0" + j + "月</option>");
      } else {
        var opsri = $("<option value=" + j + ">" + j + "月</option>");
      }
      $('.month').append(opsri);
    }

    $(".like-list a").on('click', function () {
      if ($(".like-list .actived").length < 5) {
        if ($(this).hasClass('actived')) {
          $(this).removeClass('actived');
        } else if ($(this).hasClass('monys')) {
          $(".editbgs").show();
          $(".monys-select").show();
          $(".gao").on('click', function () {
            $(".editbgs").hide();
            $(".monys-select").hide();
            $(".monys").addClass('actived');
          })
          $(".loser").on('click', function () {
            $(".editbgs").hide();
            $(".monys-select").hide();
          })
        } else {
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

    if (type == 'sexs') {
      if (this.user['sex'] == '1' || this.user['sex'] == '2' || this.user['sex'] == '男' || this.user['sex'] == '女') {
        return;
      }
    }

    this.type = type;
    if (this.type != 'cars') {
      this.editbg = "block";
    }
    if (this.type == 'tels') {
      this.newMobile = '';
      this.checkcode = ''
      clearInterval(this.confirmTimer);
      $(".step1").show();
      $(".step2").hide();
      $(".tel-bg").hide();
      $(".step3").hide();
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
      $(".datas .year").val($(".birthday").html().substring(0, 4));
      $(".datas .month").val($(".birthday").html().substring(5, 7));
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

  private confirmTimer;

  confirm() {
    if (this.isEmpty(this.newMobile)) {
      toastr.warning('手机号不能为空');
    } else {

      if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(this.newMobile)) {
        toastr.warning('请输入有效的电话号码');
      } else {
        this.userService.sendSmsCheckCode(this.newMobile);
        $(".step1").hide();
        $(".step2").hide();
        $(".tel-bg").hide();
        $(".step3").show();
        $(".telphon-num input").val($(".tel-num input").val())
        var seconds = 60;
        this.confirmTimer = setInterval(function () {
          seconds--;
          if (seconds <= 0) {
            clearInterval(this.confirmTimer);
            $(".code-mes").html("重新发送");
          } else {
            $(".code-mes").html(seconds + "");
          }
        }, 1000)
      }
    }
  }

  private resendTimer;

  resend() {
    var seconds = 60;
    this.resendTimer = setInterval(function () {
      seconds--;
      if (seconds <= 0) {
        clearInterval(this.resendTimer);
        $(".code-mes").html("重新发送");
      } else {
        $(".code-mes").html(seconds + "");
      }
    }, 1000)
  }

//电话验证码提交
  telscode() {
    this.userService.checkSmsCheckCode(this.newMobile, this.checkcode).subscribe(
      () => {
        this.user['mobile'] = this.newMobile;
        this.updateUserProperty('mobile', '手机');
        $(".telsboxs").hide();
        $(".editbg").hide();
      }, err => this.userService.handleException(err)
    )
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

    var value = year + "-" + month + "-01";

    this.userService.setUserProperty({
      name: 'birthday',
      value: value
    }).subscribe(() => {
        toastr.success('修改成功');
        let birthday = new Date(this.user['birthday']);
        birthday.setFullYear(year);
        birthday.setMonth(month - 1);
        console.log(birthday);
        this.user['birthday'] = birthday.getTime();
        this.originUser['birthday'] = this.user['birthday'];
        this.close();
      }, err => this.userService.handleException(err)
    );


  }

//昵称
  clearnick() {
    this.user['nickname'] = "";
  }

  commitnick() {
    this.updateUserProperty('nickname', '昵称');
  }

  changeSex(value) {
    this.user['sex'] = value;
    this.updateUserProperty('sex', '性别');
  }

  updateUserProperty(prop: string, propName: string) {
    if (this.isEmpty(this.user[prop])) {
      toastr.warning(propName + '不能为空');
    } else {
      this.userService.setUserProperty({
        name: prop,
        value: this.user[prop]
      }).subscribe(() => {
          toastr.success('修改成功');
          this.originUser[prop] = this.user[prop];
          this.close();
        }, err => this.userService.handleException(err)
      );
    }
  }

  private isEmpty(value: string): boolean {
    if ($.trim(value) == '') {
      return true;
    } else {
      return false;
    }
  }

//车型
  close() {
    this.type = "none";
    this.editbg = "none";
  }

  recover(prop) {
    console.log(prop);
    console.log(this.user);
    console.log(this.originUser);
    this.user[prop] = this.originUser[prop];
    this.close();
  }

  huoqu() {
    this.type = "none";
    console.log(event.target['innerHTML']);
  }


}
