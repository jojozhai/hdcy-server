/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {GiftService} from "./gift.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'gift-detail',
    templateUrl: './gift-detail.component.html'
})
export class GiftDetailComponent implements OnInit {

    gift;

    swiperOptions = {
        loop: false,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        watchActiveIndex: true,
    };

    constructor(private route: ActivatedRoute, private giftService: GiftService) {
    }

    ngOnInit() {
        this.giftService.get(this.route.snapshot.params['id']).subscribe(value => {
            this.gift = value;
        })
    }

    exchange() {
        toastr.info('积分不足,无法兑换');
    }

}
