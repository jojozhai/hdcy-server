/**
 * Created by zhailiang on 16/10/21.
 */
import {OnInit} from "@angular/core";
import {SafeHtml, DomSanitizer} from "@angular/platform-browser";
import {VideoService} from "./video.service";
import {ActivatedRoute} from "@angular/router";
import {WeixinService, WeixinShareInfoChangedEvent} from "../shared/service/weixin.service";
export class BaseVideoDetailComponent implements OnInit {

    video = {};

    videoFrame: SafeHtml;

    constructor(private videoService: VideoService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private weixinService: WeixinService) {

    }

    ngOnInit() {
        this.videoService.get(this.route.snapshot.params['id']).subscribe(value => {
            this.videoFrame = this.sanitizer.bypassSecurityTrustHtml(`<iframe frameborder="0" height="210" width="100%" src='${value.url}' allowfullscreen></iframe>`);
            this.video = value;
            this.weixinService.weixinShareInfoChangedEvent.emit(new WeixinShareInfoChangedEvent(value.name, value.image));
        });
    }

}
