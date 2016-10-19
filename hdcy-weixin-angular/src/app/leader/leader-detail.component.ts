/**
 * Created by zhailiang on 16/10/17.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {LeaderService} from "./leader.service";
import {WeixinService, WeixinShareInfoChangedEvent} from "../shared/service/weixin.service";

@Component({
  selector: 'leader-detail',
  templateUrl: 'leader-detail.component.html'
})
export class LeaderDetailComponent implements OnInit {

  leader = {};

  constructor(private leaderService: LeaderService, private route: ActivatedRoute, private weixinService:WeixinService) {
  }

  ngOnInit() {
    this.leaderService.get(this.route.snapshot.params['id']).subscribe(value => {
      this.leader = value;
      this.weixinService.weixinShareInfoChangedEvent.emit(new WeixinShareInfoChangedEvent(value.name, value.image));
    });
  }

}
