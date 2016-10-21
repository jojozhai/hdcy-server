/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute, Router} from "@angular/router";
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

    condition = {enable: 'true', liveForWeixin: 'true', top: 'false'};

    dateFormat = "yyyy-MM-dd";
	
	cntsboxHeight: number = document.body.clientHeight - 50;
    constructor(route: ActivatedRoute, private router: Router, private videoService: VideoService, swiperService: SwiperService) {
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
        this.videoService.query(super.buildCondition({
            top: 'true',
            liveForWeixin: 'true',
            enable: 'true'
        })).subscribe(res => this.topVideos = res.json().content);
    }

    navToDetail(video) {
        if (video.live) {
            let begin = new Date().getTime() - new Date(video.startTime).getTime();
            console.log(begin);
            if(begin > 0){
                window.location.href = video.liveLink;
            }else{
                this.router.navigateByUrl('/show/' + video.id);
            }
        } else {
            this.router.navigateByUrl('/video/' + video.id);
        }
    }

}
