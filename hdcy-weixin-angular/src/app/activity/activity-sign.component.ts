/**
 * Created by zhailiang on 16/10/9.
 */
import {Component,OnInit} from "@angular/core";
import {ActivityService} from "./activity.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";
import {UserService} from "../shared/service/user.service";
@Component({
	selector: 'activity-sign',
	templateUrl: 'activity-sign.component.html',
	styleUrls: ['./activity.module.css']
})
export class ActivitySignComponent implements OnInit {

	defaultContent: string = '写点什么吧......';

    message: string = this.defaultContent;
	detailboxHeight: number = document.body.clientHeight - 48;
    activityId: number;
	
	name:string;
  	telphone:number;

    user:any = {};

    constructor(route: ActivatedRoute, private activityService: ActivityService, private userService: UserService) {
        this.activityId = route.snapshot.queryParams['id'];
        if (!environment.userToken) {
            activityService.login();
        }else{
            userService.getCurrentUserInfo().subscribe((res) => this.user = res.json());
        }
    }

	ngOnInit() {}

	sign() {
        if (environment.userToken) {
            if (jQuery(".name-input").val()==""||jQuery(".tel-input").val()=="") {			
				toastr.info("请填写完整信息");
			} else{
				if (jQuery(".tel-input").val().length>11||jQuery(".tel-input").val().length<11) {
                    toastr.info("手机号位数不对");
				} else{
                    this.userService.setUserPropertys([{
                        name: 'realname',
                        value: this.user.realname
                    }, {
                        name: 'mobile',
                        value: this.user.mobile
                    }]).subscribe(() => {
                        this.activityService.sign({activityId: this.activityId, message: this.message})
                    })
				}
			}
        } else {
            this.activityService.login();
        }
    }

	clean() {
		if(this.message == this.defaultContent) {
			this.message = '';
		}
	}

}