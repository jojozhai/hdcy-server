/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {LeaderService} from "./leader.service";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute} from "@angular/router";
import {SwiperService} from "../shared/service/swiper.service";

@Component({
  selector: 'leader-list',
  templateUrl: './leader-list.component.html'
})
export class LeaderListComponent extends ListComponent implements OnInit {

  leaders: Array<any>;

  topLeaders: Array<any>;

  condition = {enable: 'true', top: 'false'};

  constructor(route: ActivatedRoute, private leaderService: LeaderService, swiperService: SwiperService) {
    super(route);
    swiperService.onImageRendered.subscribe(event => {
      if (event.type == 'leader' && !event.image.swiperContent) {
        event.image.swiperContent = event.image.name;
      }
    })
  }

  ngOnInit() {
    this.leaderService.query(super.buildCondition(this.condition)).subscribe(res => this.leaders = res.json().content);
    this.leaderService.query(super.buildCondition({top: 'true', enable: 'true'})).subscribe(res => this.topLeaders = res.json().content);
  }

}
