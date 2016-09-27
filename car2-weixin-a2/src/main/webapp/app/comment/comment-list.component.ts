/**
 * Created by zhailiang on 16/9/24.
 */
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'comment-list',
    template: `<div>评论列表</div>
<comment-input [target]="target" [targetId]="targetId" showCount="none"></comment-input>`
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
