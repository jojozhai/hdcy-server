/**
 * Created by zhailiang on 16/10/8.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ActivityService} from "./activity.service";
import {WeixinService} from "../shared/service/weixin.service";

@Component({
    selector: 'activity-detail',
    templateUrl: './activity-detail.component.html',
    styleUrls: ['./activity.module.css']
})
export class ActivityDetailComponent implements OnInit {

    imgDivWidth: number = 0;

    activity = {images:[]};

    contactDivState = 'none';

    constructor(private activityService: ActivityService,
                private route: ActivatedRoute,
                private weixinService: WeixinService) {

    }

    ngOnInit() {
        this.activityService.get(this.route.snapshot.params['id']).subscribe(value => {
            this.activity = value;
            this.imgDivWidth = this.activity.images.length * 108;
        });
    }

    displayContactDiv(display) {
        if (display) {
            this.contactDivState = 'block';
        } else {
            this.contactDivState = 'none';
        }
    }


}
