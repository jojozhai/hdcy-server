/**
 * Created by zhailiang on 16/10/24.
 */
import {Component, OnInit} from "@angular/core";
import {MyService} from "./my.service";

@Component({
    selector: 'my-activity',
    templateUrl: './my-activity.component.html',
    styleUrls: ['./my.module.css']
})
export class MyActivityComponent implements OnInit {

    activitys;
    
    detailboxHeight: number = document.body.clientHeight - 48;

    constructor(private myService: MyService) {
    }

    ngOnInit() {
        this.myService.getMyActivity().subscribe(res => {
            this.activitys = res.json().content;
        }, err => this.myService.handleException(err))
    }

}