/**
 * Created by zhailiang on 16/10/9.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "./video.service";

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video.module.css']

})
export class VideoDetailComponent implements OnInit {



  video = {};

  constructor(private videoService: VideoService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.videoService.get(this.route.snapshot.params['id']).subscribe(value => {
      this.video = value;
    });
  }

}
