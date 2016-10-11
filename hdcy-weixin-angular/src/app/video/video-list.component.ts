/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "./video.service";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video.module.css']
})
export class VideoListComponent extends ListComponent implements OnInit {

  videos: Array<any>;

  topVideos: Array<any>;

  condition = {live: 'false'};

  constructor(route: ActivatedRoute, private videoService: VideoService) {
    super(route);
  }

  ngOnInit() {
    this.videoService.query(super.buildCondition(this.condition)).subscribe(res => this.videos = res.json().content);
    this.videoService.query(super.buildCondition({top: 'true', live: 'false'})).subscribe(res => this.topVideos = res.json().content);
  }

}
