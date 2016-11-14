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
  detailboxHeight: number = document.body.clientHeight-328;
  detailboxHeights: number = document.body.clientHeight-250;
  detailboxHeigh: number = document.body.clientHeight-290;
  commentCount;
  chatcode='none';
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
    $(".comment-count h4").html();
    var counts=$(".comment-count h4").html().split("(")[1].split(")")[0];
    if (counts=='0') {
    	$(".zbjiaoliu .comwu").hide();
    	$(".zbjiaoliu .comment-count").hide();
    	$(".comwus").show();
    }else {
    	$(".zbjiaoliu .video-com").show();
    	$(".comwus").hide();
    	$(".comment-count").hide();

    }

  }

  setCommentCount(event){
    this.commentCount = event;
  }
  
  focus(guanzhu){
  	if (guanzhu) {
  		this.chatcode='block';
  	}else {
  		this.chatcode='none';
  	}
  	
 }

}
