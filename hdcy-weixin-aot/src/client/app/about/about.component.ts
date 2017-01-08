/**
 * Created by zhailiang on 16/10/24.
 */
import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css']
})
export class AboutComponent implements OnInit {

    detailboxHeight: number = document.body.clientHeight - 48;

    constructor() {
    }

    ngOnInit() {
    }

}