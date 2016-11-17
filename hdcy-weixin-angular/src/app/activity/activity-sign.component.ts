/**
 * Created by zhailiang on 16/10/9.
 */
import {Component, OnInit} from "@angular/core";
import {ActivityService} from "./activity.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'activity-sign',
  templateUrl: 'activity-sign.component.html',
  styleUrls: ['./activity.module.css']
})
export class ActivitySignComponent implements OnInit {

  private defaultContent: string = '写点什么吧......';

  message: string = this.defaultContent;

  activityId: number;
  detailboxHeight: number = document.body.clientHeight - 48;
  realname:string;
  mobile:number;
  constructor(route: ActivatedRoute, private activityService: ActivityService) {
    this.activityId = route.snapshot.queryParams['id'];
    if (!environment.userToken) {
      activityService.login();
    }
  }

  ngOnInit() {
  }

  sign() {
    if(environment.userToken){
		if ($(".name-input").val()==""||$(".tel-input").val()=="") {			
			alert("请填写完整信息");
		} else{
			if ($(".tel-input").val().length>11||$(".tel-input").val().length<11) {
				alert("手机号位数不对");				
			} else{
//				realname:this.realname,mobile:this.mobile,
				this.activityService.sign({activityId: this.activityId, message: this.message})
			}
			
		}
      
    }else{
      this.activityService.login();
    }
  }

  clean() {
    if (this.message == this.defaultContent) {
      this.message = '';
    }
  }

}
