/**
 * Created by zhailiang on 16/10/8.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ActivityService} from "./activity.service";

@Component({
  selector: 'activity-detail',
  templateUrl: './activity-detail.component.html'
})
export class ActivityDetailComponent implements OnInit {

  activity = {};

  constructor(private activityService: ActivityService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.activityService.get(this.route.snapshot.params['id']).subscribe(value => {
      this.activity = value;
    });
  }

}
