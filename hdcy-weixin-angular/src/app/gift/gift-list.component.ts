/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute} from "@angular/router";
import {GiftService} from "./gift.service";
import {LoadingService} from "../shared/service/loading.service";

@Component({
  selector: 'gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift.module.css']
})
export class GiftListComponent extends ListComponent implements OnInit {

  gifts;
  detailboxHeight: number = document.body.clientHeight - 48;
  constructor(route: ActivatedRoute, private giftService: GiftService, private loadingService: LoadingService) {
    super(route);
  }
   

  ngOnInit() {
    this.loadingService.loadingEvent.emit(true);
    this.giftService.query(super.buildCondition()).subscribe(res => {
      this.gifts = res.json().content
      this.loadingService.loadingEvent.emit(false);
    });
  }

}
