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
  moduleId: module.id,
  selector: 'show-detail',
  templateUrl: 'show-detail.component.html',
  styleUrls: ['video.module.css']
})
export class ShowDetailComponent extends BaseVideoDetailComponent implements OnInit {

  tag:any;
  detailboxHeight: number = document.body.clientHeight-328;
  detailboxHeights: number = document.body.clientHeight-250;
  detailboxHeigh: number = document.body.clientHeight-290;
  commentCount:any;
  chatcode='none';
  constructor(videoService: VideoService, route: ActivatedRoute, sanitizer: DomSanitizer, weixinService: WeixinService, private router: Router, loadingService: LoadingService) {
    super(videoService, route, sanitizer, weixinService, loadingService);
    this.tag = route.snapshot.queryParams['tag'];
    if (!this.tag) {
      this.tag = 'intro';
    }
  }

  changeTag(tag:any) {
    this.router.navigate(['/show',this.video.id], {queryParams: {tag:tag}});
    this.tag = tag;
    jQuery(".comment-count h4").html();
    var counts=jQuery(".comment-count h4").html().split("(")[1].split(")")[0];
    if (counts=='0') {
      jQuery(".zbjiaoliu .comwu").hide();
      jQuery(".zbjiaoliu .comment-count").hide();
    	jQuery(".comwus").show();
    }else {
    	jQuery(".zbjiaoliu .video-com").show();
    	jQuery(".comwus").hide();
    	jQuery(".comment-count").hide();

    }

  }

  setCommentCount(event:any){
    this.commentCount = event;
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
