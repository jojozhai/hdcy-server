/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "./video.service";
import {SwiperService} from "../shared/service/swiper.service";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video.module.css']
})
export class VideoListComponent extends ListComponent implements OnInit {

  videos: Array<any>;

  topVideos: Array<any>;

  condition = {enable: 'true', live: 'false', top: 'false'};

  constructor(route: ActivatedRoute, private videoService: VideoService, swiperService: SwiperService) {
    super(route);
    swiperService.onImageRendered.subscribe(event => {
      if (event.type == 'video' && !event.image.swiperContent) {
//    					Date.prototype.Format = function(format) {
//					format ? format : format = "yyyy-MM-dd hh:mm:ss";
//					let o = {
//						"M+": this.getMonth() + 1,
//						"d+": this.getDate(),
//						"h+": this.getHours(),
//						"m+": this.getMinutes(),
//						"s+": this.getSeconds(),
//						"q+": Math.floor((this.getMonth() + 3) / 3),
//						"S": this.getMilliseconds()
//					};
//					if(/(y+)/.test(format)) {
//						format = format.replace(RegExp.$1, (this.getFullYear() + "").slice(4 - RegExp.$1.length));
//					}
//					for(let k in o) {
//						if(new RegExp("(" + k + ")").test(format)) {
//							format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substring(("" + o[k]).length));
//						}
//					}
//					return format;
//				};
//
//				let times = (new Date(event.image.startTime)).Format('yyyy-MM-dd hh:mm:ss');	
        event.image.swiperContent = `<div class="activity-tit">
            ${event.image.name}
          </div>
          <div class="activity-atime clear">
            <div class="activity-add fl">
              #${event.image.liveState}# 
            </div>
            <div class="activity-stime fl">
//            ${times}
            </div>
          </div>`;
      }
    })
  }

  ngOnInit() {
    this.videoService.query(super.buildCondition(this.condition)).subscribe(res => this.videos = res.json().content);
    this.videoService.query(super.buildCondition({top: 'true', live: 'false', enable: 'true'})).subscribe(res => this.topVideos = res.json().content);
  }

}
