/**
 * Created by zhailiang on 16/10/17.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {LeaderService} from "./leader.service";
import {WeixinService, WeixinShareInfoChangedEvent} from "../shared/service/weixin.service";
import {LoadingService} from "../shared/service/loading.service";

@Component({
  selector: 'leader-detail',
  templateUrl: 'leader-detail.component.html',
  styleUrls: ['./leader.module.css']
})
export class LeaderDetailComponent implements OnInit {

  leader = {};
  chatcode='none';
  detailboxHeight: number = document.body.clientHeight - 48;
  constructor(private leaderService: LeaderService, private route: ActivatedRoute, private weixinService:WeixinService, private loadingService: LoadingService) {
  }

  ngOnInit() {
    this.loadingService.loadingEvent.emit(true);
    this.leaderService.get(this.route.snapshot.params['id']).subscribe(value => {
      this.leader = value;
      this.weixinService.weixinShareInfoChangedEvent.emit(new WeixinShareInfoChangedEvent(value.name, value['image']));
      this.loadingService.loadingEvent.emit(false);
    });
  }
  focus(guanzhu){
  	if (guanzhu) {
  		this.chatcode='block';
  	}else {
  		this.chatcode='none';
  	}
  	
  }

}
