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
  }

  uploadHeadImg() {
    this.weixinService.fileUpload();
  }
  
//个人资料
  edit(type){
	this.type=type;
	if (this.type!='cars') {
		this.editbg="block";
	}
	if (this.type=='nicks') {
		console.log(this)
	}
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
  	console.log(event.target.innerHTML);
  }
  
//兴趣 
  like0(tag){
  	this.tag=tag;  	
  	this.num++;  	
  	console.log(event.target.innerHTML);
  }
  like1(tag){
  	this.tag=tag;  	
  	this.num++;  	
  	console.log(event.target.innerHTML);
  }
  

}
