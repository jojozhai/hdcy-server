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

  constructor(route: ActivatedRoute, private activityService: ActivityService) {
    this.activityId = route.snapshot.queryParams['id'];
    if (!environment.userToken) {
      activityService.login();
    }
  }

  ngOnInit() {
  }

  sign() {
    this.activityService.sign({activityId: this.activityId, message: this.message})
  }

  clean() {
    if (this.message == this.defaultContent) {
      this.message = '';
    }
  }

}
