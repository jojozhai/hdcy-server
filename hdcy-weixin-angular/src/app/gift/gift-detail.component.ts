/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {GiftService} from "./gift.service";
import {ActivatedRoute} from "@angular/router";
import {LoadingService} from "../shared/service/loading.service";

@Component({
  selector: 'gift-detail',
  templateUrl: './gift-detail.component.html',
  styleUrls: ['./gift.module.css']
})
export class GiftDetailComponent implements OnInit {

  gift;
  tag;
  detailboxHeight: number = document.body.clientHeight - 48;
  swiperOptions = {
    loop: false,
    autoplay: 3000,
    pagination: '.swiper-pagination',
    paginationClickable: true,

  };

  constructor(private route: ActivatedRoute, private giftService: GiftService, private loadingService: LoadingService) {
  	if (!this.tag) {
      this.tag = 'business';
    }
  }

  ngOnInit() {
    this.loadingService.loadingEvent.emit(true);
    this.giftService.get(this.route.snapshot.params['id']).subscribe(value => {
      this.gift = value;
      this.loadingService.loadingEvent.emit(false);
    })
  }

  exchange() {
    toastr.info('积分不足,无法兑换');
  }
  changeTag(tag){
  	this.tag=tag;
  }

}
