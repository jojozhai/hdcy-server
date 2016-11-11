/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'article',
    template: '<router-outlet></router-outlet>'
})
export class ArticleComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}