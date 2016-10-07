/**
 * Created by zhailiang on 16/9/24.
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

    private target: string;

    private targetId: number;

    constructor(route: ActivatedRoute) {
        this.target = route.snapshot.queryParams['target'];
        this.targetId = route.snapshot.queryParams['targetId'];
    }

    ngOnInit() { }

}
