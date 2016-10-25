/**
 * Created by zhailiang on 16/10/9.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {VideoService} from "./video.service";
import {DomSanitizer} from "@angular/platform-browser";
import {WeixinService} from "../shared/service/weixin.service";
import {BaseVideoDetailComponent} from "./base-video-detail.component";
import {LoadingService} from "../shared/service/loading.service";

@Component({
  selector: 'show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./video.module.css']
})
export class ShowDetailComponent extends BaseVideoDetailComponent implements OnInit {

  tag;

  commentCount;

  constructor(videoService: VideoService, route: ActivatedRoute, sanitizer: DomSanitizer, weixinService: WeixinService, private router: Router, loadingService: LoadingService) {
    super(videoService, route, sanitizer, weixinService, loadingService);
    this.tag = route.snapshot.queryParams['tag'];
    if (!this.tag) {
      this.tag = 'intro';
    }
  }

  changeTag(tag) {
    this.router.navigate(['/show',this.video['id']], {queryParams: {tag:tag}});
    this.tag = tag;
  }

  setCommentCount(event){
    this.commentCount = event;
  }

}
