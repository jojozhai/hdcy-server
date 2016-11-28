/**
 * Created by zhailiang on 2016/11/27.
 */
/**
 * Created by zhailiang on 16/10/24.
 */
import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'about-focus',
    templateUrl: 'about-focus.component.html',
    styleUrls: ['about.component.css']
})
export class AboutFocusComponent implements OnInit {

    detailboxHeight: number = document.body.clientHeight - 48;

    constructor() {
    }

    ngOnInit() {
    }

}