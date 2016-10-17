/**
 * Created by zhailiang on 16/9/23.
 */

import {
	Component,
	OnInit
} from "@angular/core";
import {
	ListComponent
} from "../shared/component/list.component";
import {
	ActivatedRoute
} from "@angular/router";
import {
	ActivityService
} from "./activity.service";
import {
	SwiperService
} from "../shared/service/swiper.service";

@Component({
	selector: 'activity-list',
	templateUrl: './activity-list.component.html',
	styleUrls: ['./activity.module.css']
})
export class ActivityListComponent extends ListComponent implements OnInit {

	workingActivities: Array < any > ;

	finishActivities: Array < any > ;

	topActivities: Array < any > ;

	condition = {
		finish: 'true',
		top: 'false',
		sort: 'startTime,desc'
	};

	constructor(route: ActivatedRoute, public activityService: ActivityService, swiperService: SwiperService) {
		super(route);
		swiperService.onImageRendered.subscribe(event => {
			if(event.type == 'activity' && !event.image.swiperContent) {				
				Date.prototype.Format = function(format) {
					format ? format : format = "yyyy-MM-dd hh:mm:ss";
					let o = {
						"M+": this.getMonth() + 1,
						"d+": this.getDate(),
						"h+": this.getHours(),
						"m+": this.getMinutes(),
						"s+": this.getSeconds(),
						"q+": Math.floor((this.getMonth() + 3) / 3),
						"S": this.getMilliseconds()
					};
					if(/(y+)/.test(format)) {
						format = format.replace(RegExp.$1, (this.getFullYear() + "").slice(4 - RegExp.$1.length));
					}
					for(let k in o) {
						if(new RegExp("(" + k + ")").test(format)) {
							format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length));
						}
					}
					return format;
				};

				let times = (new Date(event.image.startTime)).Format('yyyy-MM-dd');			

				event.image.swiperContent = `<div class="activity-tit">
            ${event.image.name}
          </div>
          <div class="activity-atime clear">
            <div class="activity-add fl">
              ${event.image.address}/
            </div>
            <div class="activity-stime fl">
              ${times}
            </div>
          </div>`;
				event.image.swiperContent1 = `<img class="sponsor" src="${event.image.sponsorImage}"/>`;

			}
		})
	}

	ngOnInit() {
		this.activityService.query({
			finish: 'false',
			top: 'false',
			size: 100,
			page: 0,
			sort: 'signEndTime,asc'
		}).subscribe(res => {
			this.workingActivities = res.json().content;
		})
		this.activityService.query(super.buildCondition(this.condition)).subscribe(res => {
			this.finishActivities = res.json().content;
		})
		this.activityService.query({
			top: 'true',
			size: 100,
			page: 0,
			sort: 'topIndex,asc'
		}).subscribe(res => {
			this.topActivities = res.json().content;
		})
	}

}