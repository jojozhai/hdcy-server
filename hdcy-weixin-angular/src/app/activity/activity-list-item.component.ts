/**
 * Created by zhailiang on 16/10/8.
 */
import {Component, OnInit} from "@angular/core";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity.module.css']
})
export class ActivityListItemComponent implements OnInit {

  @Input() activity;

  constructor() {

  }

  ngOnInit() {
  }

  showSignTip(activity) {
    let distance = new Date(activity.signEndTime).getTime() - new Date().getTime();
    if (distance > 0) {
      return distance < 1000 * 60 * 60 * 24 * 3
    }
    return false;
  }

  isSignEnd(){
    let distance = new Date(this.activity.signEndTime).getTime() - new Date().getTime();
    return distance < 0;
  }

  isEnd(){
    let distance = new Date(this.activity.endTime).getTime() - new Date().getTime();
    return distance < 0;
  }

}
