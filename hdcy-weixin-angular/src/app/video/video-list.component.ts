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
        event.image.swiperContent = `<div class="activity-tit">
            ${event.image.name}
          </div>
          <div class="activity-atime clear">
            <div class="activity-add fl">
              #视频# 
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
