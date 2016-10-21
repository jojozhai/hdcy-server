/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {LeaderService} from "./leader.service";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'leader-list',
    templateUrl: './leader-list.component.html',
    styleUrls: ['./leader.module.css']
})
export class LeaderListComponent extends ListComponent implements OnInit {

    leaders: Array<any>;

    topLeaders: Array<any>;

    condition = {enable: 'true', top: 'false', organ: null};

    currentTag = 0;

    swiperOptions = {
        loop: false,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        watchActiveIndex: true,
    };

    constructor(route: ActivatedRoute, private leaderService: LeaderService) {
        super(route);
    }

    ngOnInit() {
        this.query();
        this.leaderService.query(super.buildCondition({
            top: 'true',
            enable: 'true'
        })).subscribe(res => this.topLeaders = res.json().content);
    }

    changeTag(index) {
        if (index == 0) {
            this.condition.organ = null;
        } else if (index == 1) {
            this.condition.organ = 'false';
        } else if (index == 2) {
            this.condition.organ = 'true';
        }
        this.currentTag = index;
        this.query();
    }

    isActive(index) {
        return this.currentTag == index;
    }

    private query() {
        this.leaderService.query(super.buildCondition(this.condition)).subscribe(res => this.leaders = res.json().content);
    }

}
