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
  city;
  detailboxHeight: number = document.body.clientHeight - 48;
  citysA = [{A: "鞍山市"}, {A: "阿拉善盟"}, {A: "安庆市"}, {A: "安阳市"}, {A: "阿里地区"}, {A: "安康市"}, {A: "安顺市"}, {A: "阿坝藏族羌族自治州"}, {A: "阿拉尔市"}, {A: "阿克苏地区"}, {A: "澳门特别行政区"}, {A: "阿勒泰地区"}];

  citysB = [{B: "白城市"}, {B: "包头市"}, {B: "巴彦淖尔市"}, {B: "保定市"}, {B: "本溪市"}, {B: "白山市"}, {B: "毫州市"}, {B: "蚌埠市"}, {B: "滨州市"}, {B: "白银市"}, {B: "宝鸡市"}, {B: "保山市"}, {B: "白沙黎族自治县"}, {B: "百色市"}, {B: "毕节市"}, {B: "北海市"}, {B: "巴中市"}, {B: "保亭黎族苗族自治县"}, {B: "巴音郭楞蒙古自治州"}, {B: "博尔塔拉蒙古自治州"}, {B: "北京市"}];
  citysC = [{C: "长治市"}, {C: "沧州市"}, {C: "常州市"}, {C: "慈溪市"}, {C: "常熟市"}, {C: "承德市"}, {C: "长治市"}, {C: "长治市"}, {C: "长治市"}, {C: "长治市"}, {C: "赤峰市"}, {C: "长春市"}, {C: "郴州市"}, {C: "长沙市"}, {C: "滁州市"}, {C: "常德市"}, {C: "巢湖市"}, {C: "池州市"}, {C: "澄迈县"}, {C: "崇左市"}, {C: "昌江黎族自治县"}, {C: "楚雄彝族自治州"}, {C: "潮州市"}, {C: "重庆市"}, {C: "成都市"}, {C: "昌都地区"}, {C: "昌吉回族自治州"}];

  citysD = [{D: "大兴安岭地区"}, {D: "大同市"}, {D: "大庆市"}, {D: "丹阳市"}, {D: "大连市"}, {D: "丹东市"}, {D: "东营市"}, {D: "德州市"}, {D: "达州市"}, {D: "大理白族自治州"}, {D: "儋州市"}, {D: "定安县"}, {D: "迪庆藏族自治州"}, {D: "德阳市"}, {D: "东方市"}, {D: "德宏傣族景颇族自治州"}, {D: "东莞市"}, {D: "定西市"}];
  citysE = [{E: "鄂尔多斯市"}, {E: "鄂州市"}, {E: "恩施土家族苗族自治州"}];

  citysF = [{F: "阜新市"}, {F: "抚顺市"}, {F: "福清市"}, {F: "阜阳市"}, {F: "肥城市"}, {F: "抚州市"}, {F: "福州市"}, {F: "佛山"}, {F: "防城港市"}];
  citysG = [{G: "广州市"}, {G: "赣州市"}, {G: "广元市"}, {G: "广安市"}, {G: "桂林市"}, {G: "贵港市"}, {G: "贵阳市"}, {G: "甘孜藏族自治州"}, {G: "甘南藏族自治州"}, {G: "固原市"}, {G: "果洛藏族自治州"}];

  citysH = [{H: "黑河市"}, {H: "葫芦岛市"}, {H: "海宁市"}, {H: "淮安市"}, {H: "衡水市"}, {H: "呼和浩特市"}, {H: "湖州市"}, {H: "鹤岗市"}, {H: "呼伦贝尔市"}, {H: "邯郸市"}, {H: "杭州市"}, {H: "鹤壁市"}, {H: "菏泽市"}, {H: "黄石市"}, {H: "怀化市"}, {H: "淮北市"}, {H: "黄冈市"}, {H: "衡阳市"}, {H: "合肥市"}, {H: "淮南市"}, {H: "黄山市"}, {H: "河池市"}, {H: "海口市"}, {H: "河源市"}, {H: "红河哈尼族彝族自治州"}, {H: "惠州市"}, {H: "汉中市"}, {H: "贺州市"}, {H: "海西蒙古族藏族自治州"}, {H: "海东市"}, {H: "黄南藏族自治州"}, {H: "哈密地区"}, {H: "海北藏族自治州"}, {H: "和田地区"}, {H: "海南藏族自治州"}];

  citysJ = [{J: "锦州市"}, {J: "金华市"}, {J: "晋中市"}, {J: "江阴市"}, {J: "吉林市"}, {J: "佳木斯市"}, {J: "鸡西市"}, {J: "嘉兴市"}, {J: "晋城市"}, {J: "晋江市"}, {J: "即墨市"}, {J: "吉安市"}, {J: "济南市"}, {J: "荆门市"}, {J: "焦作市"}, {J: "济宁市"}, {J: "济源市"}, {J: "荆州市"}, {J: "九江市"}, {J: "景德镇市"}, {J: "揭阳市"}, {J: "金昌市"}, {J: "江门市"}, {J: "嘉峪关市"}, {J: "酒泉市"}];

  citysK = [{K: "昆山市"}, {K: "开封市"}, {K: "昆明市"}, {K: "克拉玛依市"}, {K: "克孜勒苏柯尔克孜自治州"}, {K: "喀什地区"}];

  citysL = [{L: "临汾市"}, {L: "廊坊市"}, {L: "辽阳市"}, {L: "辽源市"}, {L: "吕梁市"}, {L: "连云港市"}, {L: "莱芜市"}, {L: "漯河市"}, {L: "丽水市"}, {L: "六安市"}, {L: "娄底市"}, {L: "龙岩市"}, {L: "龙口市"}, {L: "临沂市"}, {L: "洛阳市"}, {L: "聊城市"}, {L: "丽江市"}, {L: "来宾市"}, {L: "泸州市"}, {L: "临沧市"}, {L: "乐东黎族自治县"}, {L: "乐山市"}, {L: "兰州市"}, {L: "柳州市"}, {L: "凉山彝族自治州"}, {L: "陵水黎族自治县"}, {L: "林芝地区"}, {L: "临高县"}, {L: "拉萨市"}, {L: "六盘水市"}, {L: "陇南市"}, {L: "临夏回族自治州"}];

  citysM = [{M: "牡丹江市"}, {M: "马鞍山市"}, {M: "绵阳市"}, {M: "眉山市"}, {M: "茂名市"}, {M: "梅州市"}];

  citysN = [{N: "南京市"}, {N: "宁波市"}, {N: "南通市"}, {N: "南昌市"}, {N: "南阳市"}, {N: "南平市"}, {N: "宁德市"}, {N: "南安市"}, {N: "那曲地区"}, {N: "南宁市"}, {N: "南充市"}, {N: "内江市"}, {N: "怒江傈僳族自治州"}];

  citysP = [{P: "盘锦市"}, {P: "萍乡市"}, {P: "平顶山市"}, {P: "濮阳市"}, {P: "莆田市"}, {P: "攀枝花市"}, {P: "普洱市"}, {P: "平凉市"}];

  citysQ = [{Q: "秦皇岛市"}, {Q: "齐齐哈尔市"}, {Q: "七台河市"}, {Q: "泉州市"}, {Q: "潜江市"}, {Q: "青岛市"}, {Q: "衢州市"}, {Q: "清远市"}, {Q: "黔南布依族苗族自治州"}, {Q: "钦州市"}, {Q: "曲靖市"}, {Q: "黔西南布依族苗族自治州"}, {Q: "庆阳市"}, {Q: "黔东南苗族侗族自治州"}, {Q: "琼海市"}, {Q: "琼中黎族苗族自治县"}];

  citysR = [{R: "如皋市"}, {R: "荣成市"}, {R: "日照市"}, {R: "日喀则市"}]

  citysS = [{S: "四平市"}, {S: "绥化市"}, {S: "松原市"}, {S: "苏州市"}, {S: "上海市"}, {S: "宿迁市"}, {S: "绍兴市"}, {S: "朔州市"}, {S: "双鸭山市"}, {S: "沈阳市"}, {S: "上虞市"}, {S: "石家庄市"}, {S: "汕头市"}, {S: "三明市"}, {S: "神农架林区"}, {S: "上饶市"}, {S: "商丘市"}, {S: "随州市"}, {S: "宿州市"}, {S: "三门峡市"}, {S: "十堰市"}, {S: "深圳市"}, {S: "邵阳市"}, {S: "韶关市"}, {S: "汕尾市"}, {S: "遂宁市"}, {S: "商洛市"}, {S: "山南地区"}, {S: "三亚市"}, {S: "石嘴山市"}, {S: "石河子市"}];

  citysT = [{T: "太原市"}, {T: "铁岭市"}, {T: "通化市"}, {T: "唐山市"}, {T: "太仓市"}, {T: "天津市"}, {T: "泰州市"}, {T: "通辽市"}, {T: "台州市"}, {T: "泰安市"}, {T: "天门市"}, {T: "铜陵市"}, {T: "铜仁市"}, {T: "屯昌县"}, {T: "铜川市"}, {T: "天水市"}, {T: "塔城地区"}, {T: "图木舒克市"}, {T: "吐鲁番地区"}, {T: "台湾"}];

  citysW = [{W: "温州市"}, {W: "无锡市"}, {W: "乌兰察布市"}, {W: "乌海市"}, {W: "芜湖市"}, {W: "武汉市"}, {W: "潍坊市"}, {W: "威海市"}, {W: "万宁市"}, {W: "渭南市"}, {W: "文昌市"}, {W: "五指山市"}, {W: "武威市"}, {W: "梧州市"}, {W: "文山壮族苗族自治州"}, {W: "五家渠市"}, {W: "吴忠市"}, {W: "乌鲁木齐市"}];

  citysX = [{X: "忻州市"}, {X: "锡林郭勒盟"}, {X: "邢台市"}, {X: "兴安盟"}, {X: "徐州市"}, {X: "新乡市"}, {X: "襄阳市"}, {X: "新余市"}, {X: "信阳市"}, {X: "仙桃市"}, {X: "许昌市"}, {X: "湘潭市"}, {X: "厦门市"}, {X: "宣城市"}, {X: "孝感市"}, {X: "咸宁市"}, {X: "湘西土家族苗族自治州"}, {X: "西安市"}, {X: "咸阳市"}, {X: "西双版纳傣族自治州"}, {X: "西宁市"}, {X: "香港特别行政区"}];

  citysY = [{Y: "宜兴市"}, {Y: "延边朝鲜族自治州"}, {Y: "扬州市"}, {Y: "运城市"}, {Y: "盐城市"}, {Y: "阳泉市"}, {Y: "余姚市"}, {Y: "伊春市"}, {Y: "营口市"}, {Y: "烟台市"}, {Y: "宜昌市"}, {Y: "岳阳市"}, {Y: "宜春市"}, {Y: "益阳市"}, {Y: "义乌市"}, {Y: "鹰潭市"}, {Y: "永州市"}, {Y: "玉林市"}, {Y: "雅安市"}, {Y: "玉溪市"}, {Y: "阳江市"}, {Y: "榆林市"}, {Y: "宜宾市"}, {Y: "云浮市"}, {Y: "延安市"}, {Y: "伊犁哈萨克自治州"}, {Y: "银川市"}, {Y: "玉树藏族自治州"}];

  citysZ = [{Z: "张家口市"}, {Z: "诸暨市"}, {Z: "镇江市"}, {Z: "张家港市"}, {Z: "朝阳市"}, {Z: "张家界市"}, {Z: "郑州市"}, {Z: "枣庄市"}, {Z: "舟山市"}, {Z: "增城市"}, {Z: "珠海市"}, {Z: "周口市"}, {Z: "淄博市"}, {Z: "株洲市"}, {Z: "漳州市"}, {Z: "驻马店市"}, {Z: "湛江市"}, {Z: "遵义市"}, {Z: "自贡市"}, {Z: "昭通市"}, {Z: "肇庆市"}, {Z: "中山市"}, {Z: "张掖市"}, {Z: "资阳市"}, {Z: "中卫市"}];

  newMobile = '';
  checkcode = '';


  tags = ['竞速', '极限',
    '卡丁车',
    'GTR',
    'F1',
    '漂移',
    '改装',
    '遥控模型',
    '发烧友',
    '飙车党',
    '引擎控',
    '资深车手',
    '改装大神',
    '数据党',
    '其他'];

  constructor(private userService: UserService, private weixinService: WeixinService) {
    this.weixinService.fileUploadFinishEvent.subscribe(url => {
      console.log("url is:" + url);
      this.userService.setUserProperty({name: 'headimgurl', value: url}).subscribe(
        res => this.ngOnInit()
      );
    });


  }

  test() {
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

    // $(".like-list a").on('click', function () {
    //   if ($(".like-list .actived").length < 5) {
    //     if ($(this).hasClass('actived')) {
    //       $(this).removeClass('actived');
    //     } else if ($(this).hasClass('monys')) {
    //       $(".editbgs").show();
    //       $(".monys-select").show();
    //       $(".gao").on('click', function () {
    //         $(".editbgs").hide();
    //         $(".monys-select").hide();
    //         $(".monys").addClass('actived');
    //       })
    //       $(".loser").on('click', function () {
    //         $(".editbgs").hide();
    //         $(".monys-select").hide();
    //       })
    //     } else {
    //       $(this).addClass('actived');
    //     }
    //   }
    // })

  }

  uploadHeadImg() {
    this.weixinService.fileUpload();
  }

// 城市编辑
  citys(city) {
    this.user['city'] = city;
    this.close();
    this.userService.setUserProperty({name: 'city', value: city}).subscribe(
      () => {
        this.originUser['city'] = city;
        toastr.info('修改成功');
      }
    )
  }

//个人资料
  edit(type) {
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

  updateCar() {
    let value = event.target['innerHTML'];
    this.user['car'] = value;
    this.close();
    this.userService.setUserProperty({name: 'car', value: value}).subscribe(
      () => {
        this.originUser['car'] = value;
        toastr.info('修改成功');
      }
    )
  }

  showGTR: boolean = false;

  clickTag(tag) {
    let userTags: Array<string> = this.getUserTags();

    if (this.isActiveTag(tag)) {
      userTags.splice(userTags.indexOf(tag), 1);
      this.user['tags'] = userTags.join(",");
    } else {
      if (userTags.length < 4) {

        if (tag == "GTR") {
          this.showGTR = true;
        } else {
          userTags.push(tag);
          this.user['tags'] = userTags.join(",");
        }

      } else {
        toastr.warning('最多只能选择4个标签');
      }
    }
  }

  closeTagsChoice() {
    this.close();
    this.userService.setUserProperty({name: 'tags', value: this.user['tags']}).subscribe(
      () => {
        this.originUser['car'] = this.user['tags'];
        toastr.info('修改成功');
      }
    )
  }

  choiceGTR() {
    let userTags: Array<string> = this.getUserTags();
    userTags.push('GTR');
    this.user['tags'] = userTags.join(",");
    this.showGTR = false;
  }

  isActiveTag(tag) {
    return this.getUserTags().indexOf(tag) != -1;
  }

  private getUserTags(): Array<string> {
    if (!this.isEmpty(this.user['tags'])) {
      return this.user['tags'].split(",");
    } else {
      return [];
    }
  }
}
