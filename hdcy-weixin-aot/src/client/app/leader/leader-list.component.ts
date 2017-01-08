/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {LeaderService} from "./leader.service";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute} from "@angular/router";
import {ParamService} from "../shared/service/param.service";
import {LoadingService} from "../shared/service/loading.service";

@Component({
    moduleId: module.id,
    selector: 'leader-list',
    templateUrl: 'leader-list.component.html',
    styleUrls: ['leader.module.css']
})
export class LeaderListComponent extends ListComponent implements OnInit {

    leaders: Array<any>;

    topLeaders: Array<any>;

    condition: any = {enable: 'true', top: 'false', organ: null};

    currentTag = 0;

    cntsboxHeight: number = document.body.clientHeight - 50;

    swiperOptions = {
        loop: false,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        watchActiveIndex: true,
    };

    applys = 'none';
    applys1 = 'none';

    contactPhone: any;
    contactEmail: any;

    constructor(route: ActivatedRoute, public leaderService: LeaderService, private paramService: ParamService, private loadingService: LoadingService) {
        super(route);
    }

    ngOnInit() {
        this.query();
        this.leaderService.query(super.buildCondition({
            top: 'true',
            enable: 'true'
        })).subscribe(res => this.topLeaders = res.json().content);

        this.paramService.getParam("leaderContactPhone").subscribe(res => {
            this.contactPhone = res.json().value;
        })

        this.paramService.getParam("leaderContactMail").subscribe(res => {
            this.contactEmail = res.json().value;
        })
    }

    changeTag(index:any) {
        if (index == 0) {
            this.condition.organ = null;
        } else if (index == 1) {
            this.condition.organ = 'false';
        } else if (index == 2) {
            this.condition.organ = 'true';
        }

        this.condition['page'] = 0;
        this.pageInfo.page = 0;
        this.currentTag = index;
        this.query();
    }

    isActive(index:any) {
        return this.currentTag == index;
    }

    private query() {
        this.loadingService.loadingEvent.emit(true);
        this.leaderService.query(super.buildCondition(this.condition)).subscribe(res => {
            this.leaders = res.json().content;
            this.loadingService.loadingEvent.emit(false);
        });
    }

    apply(display:any) {
        if (display) {
            this.applys = 'inline-block';
        }
    }

    hidden(display:any) {
        if (display) {
            this.applys = 'none';
            this.applys1 = 'none';
        }
    }

    addapply(display:any) {
        if (display) {
            this.applys1 = "inline-block"
        }
    }

    personApply() {
        toastr.info('等级不足，不能申请成为大咖');
    }

}
