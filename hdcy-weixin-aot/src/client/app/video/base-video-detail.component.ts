/**
 * Created by zhailiang on 16/10/21.
 */
import {OnInit} from "@angular/core";
import {SafeHtml, DomSanitizer} from "@angular/platform-browser";
import {VideoService} from "./video.service";
import {ActivatedRoute} from "@angular/router";
import {WeixinService, WeixinShareInfoChangedEvent} from "../shared/service/weixin.service";
import {LoadingService} from "../shared/service/loading.service";
export class BaseVideoDetailComponent implements OnInit {

  video:any = {};

  videoFrame: SafeHtml;

  constructor(public videoService: VideoService, public route: ActivatedRoute, public sanitizer: DomSanitizer, public weixinService: WeixinService, public loadingService: LoadingService) {

  }

  ngOnInit() {
    this.loadingService.loadingEvent.emit(true);
    this.videoService.get(this.route.snapshot.params['id']).subscribe(value => {
      this.videoFrame = this.sanitizer.bypassSecurityTrustHtml(`<iframe frameborder="0" height="210" width="100%" src='${value.url}' allowfullscreen></iframe>`);
      this.video = value;
      this.weixinService.weixinShareInfoChangedEvent.emit(new WeixinShareInfoChangedEvent(value.name, value['image']));
      this.loadingService.loadingEvent.emit(false);
    });
  }

}
