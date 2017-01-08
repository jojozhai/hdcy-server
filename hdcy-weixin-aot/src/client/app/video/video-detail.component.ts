/**
 * Created by zhailiang on 16/10/9.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "./video.service";
import {DomSanitizer} from "@angular/platform-browser";
import {WeixinService} from "../shared/service/weixin.service";
import {BaseVideoDetailComponent} from "./base-video-detail.component";
import {LoadingService} from "../shared/service/loading.service";

@Component({
    moduleId: module.id,
    selector: 'video-detail',
    templateUrl: 'video-detail.component.html',
    styleUrls: ['video.module.css']
})
export class VideoDetailComponent extends BaseVideoDetailComponent implements OnInit {
    detailboxHeight: number = document.body.clientHeight - 210;
	chatcode='none';
    constructor(videoService: VideoService, route: ActivatedRoute, sanitizer: DomSanitizer, public weixinService: WeixinService, loadingService: LoadingService) {
        super(videoService, route, sanitizer, weixinService, loadingService);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    focus(guanzhu:any){
  		if (guanzhu) {
  			this.chatcode='block';
  		}else {
  			this.chatcode='none';
  		}
  	
  	}

}
