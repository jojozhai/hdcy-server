/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {VideoService} from "./video.service";

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
	swiperOptions = {
        loop: false,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        watchActiveIndex: true,
    };

    constructor(route: ActivatedRoute, private router: Router, private videoService: VideoService) {
	super(route);   
	
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
            let begin = new Date().getTime() - new Date(video.startTime).getTime() > 0;
            if (begin) {
                window.location.href = video.liveLink;
            } else {
                this.router.navigateByUrl('/show/' + video.id);
            }
        } else {
            if (video.replay) {
                this.router.navigateByUrl('/show/' + video.id);
            } else {
                this.router.navigateByUrl('/video/' + video.id);
            }
        }
    }

}
