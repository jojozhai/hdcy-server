/**
 * Created by zhailiang on 16/10/9.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "./video.service";
import {DomSanitizer} from "@angular/platform-browser";
import {WeixinService} from "../shared/service/weixin.service";
import {BaseVideoDetailComponent} from "./base-video-detail.component";

@Component({
    selector: 'show-detail',
    templateUrl: './show-detail.component.html',
    styleUrls: ['./video.module.css']
})
export class ShowDetailComponent extends BaseVideoDetailComponent implements OnInit {

    constructor(videoService: VideoService, route: ActivatedRoute, sanitizer: DomSanitizer, weixinService: WeixinService) {
        super(videoService, route, sanitizer, weixinService);
    }

}
