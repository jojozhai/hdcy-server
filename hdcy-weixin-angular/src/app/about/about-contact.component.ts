/**
 * Created by zhailiang on 16/10/24.
 */
import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'about-contact',
    templateUrl: './about-contact.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutContactComponent implements OnInit {
	detailboxHeight: number = document.body.clientHeight - 48;
    constructor() {
    }

    ngOnInit() {
    }

}