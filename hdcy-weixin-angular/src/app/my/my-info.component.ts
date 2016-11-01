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
  num=0;
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
		$('#zone_ids').html($(this).html()).attr('data-id',$(this).attr('data-id'));
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
	
	
  }

  uploadHeadImg() {
    this.weixinService.fileUpload();
  }
  
   
//个人资料
  edit(type,year,month){
	this.type=type;
	if (this.type!='cars') {
		this.editbg="block";
	}
	if (this.type=='nicks') {
		console.log(this)
	}
	if (this.type=='citys') {
		$('html,body').css({
			height:'auto',
			overflow: 'scroll',
		})
		
	}
	if (this.type=='births') {			
		$(".datas .year").val($(".birthday").html().substring(0,5));
		$(".datas .month").val($(".birthday").html().substring(5));
	}
  }
//手机号
nextstep() {
	$(".step1").hide();
	$(".step3").show();
	$(".telphon-num input").val($(".tel-num input").val())
	
}
//出生年月编辑
birthSave() {
	var year=$(".datas .year").val();
	var month=$(".datas .month").val();
	console.log(year+month)
	
}
//昵称
  clearnick(){
  	$(".nicks input").val("");
  }
  commitnick() {
  	$(".nicks input").val();
  	console.log($(".nicks input").val())
  }

//车型
  close () {
	this.type="none";
	this.editbg="none";
  }
   
  huoqu(){
  	this.type="none";
  	console.log(event.target['innerHTML']);
  }
  
//兴趣 
  like0(tag){
  	this.tag=tag;  	
  	this.num++;  	
  	console.log(event.target['innerHTML']);
  }
  like1(tag){
  	this.tag=tag;  	
  	this.num++;  	
  	console.log(event.target['innerHTML']);
  }
  
  

}
