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
  
  detailboxHeight: number = document.body.clientHeight - 48;

  constructor(private userService: UserService, private weixinService: WeixinService) {


  }

  ngOnInit() {
    this.userService.getCurrentUserInfo().subscribe(
      res => this.user = res.json(),
      err => this.userService.handleException(err)
    );
  }

  uploadHeadImg() {
    this.weixinService.fileUpload((imgUrl) => {
      this.user.headimgurl = imgUrl;
    });
  }
  edit(type){
	this.type=type;  		
  }
  huoqu(){
  	this.type="none";
  	console.log(event.target.innerHTML);
//	$.ajax({
//      type: "put",
//      url: "/user/property",
//      data: ,
//      dataType: "json",
//      success: function (obj) {
//          
//      }
//
//  });
  }
 
  like(tag){
  	this.tag=tag;
  	this.num++;
  	console.log(this);
  	console.log(this.num)
  	console.log(event.target.innerHTML);
  }
  

}
