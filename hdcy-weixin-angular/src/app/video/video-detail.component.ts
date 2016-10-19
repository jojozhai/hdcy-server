/**
 * Created by zhailiang on 16/10/9.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "./video.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {WeixinService, WeixinShareInfoChangedEvent} from "../shared/service/weixin.service";

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video.module.css']

})
export class VideoDetailComponent implements OnInit {

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
