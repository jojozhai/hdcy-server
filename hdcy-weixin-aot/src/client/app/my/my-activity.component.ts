/**
 * Created by zhailiang on 16/10/24.
 */
import {Component, OnInit} from "@angular/core";
import {MyService} from "./my.service";
import {LoadingService} from "../shared/service/loading.service";

@Component({
    moduleId: module.id,
    selector: 'my-activity',
    templateUrl: 'my-activity.component.html',
    styleUrls: ['my.module.css']
})
export class MyActivityComponent implements OnInit {

    activitys: any;

    detailboxHeight: number = document.body.clientHeight - 48;

    constructor(private myService: MyService, private loadingService: LoadingService) {
    }

    ngOnInit() {
        this.loadingService.loadingEvent.emit(true);
        this.myService.getMyActivity().subscribe(res => {
            this.activitys = res.json().content;
            this.loadingService.loadingEvent.emit(false);
        }, err => this.myService.handleException(err))
    }

}
