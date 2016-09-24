/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, Input, OnInit} from "@angular/core";
import {CommentService} from "./comment.service";

@Component({
    selector: 'comment-input',
    templateUrl: 'app/comment/comment-input.component.html',
    styleUrls: ['app/comment/comment-input.component.css']
})
export class CommentInputComponent implements OnInit {

    comment: string = '说点啥呗' ;

    commentCount: number = 0;

    @Input() target: string;

    @Input() targetId: number;

    inputDivDisplay: string = 'none';

    constructor(private commentService: CommentService) { }

    ngOnInit() {

    }

    displayInput(show:boolean) {
        this.inputDivDisplay = show?'block':'none';
    }

    saveComment() {
        this.commentService.create({
            target: this.target,
            targetId: this.targetId,
            content: this.comment
        }, () => {
            this.comment = '说点啥呗';
            this.commentCount = this.commentCount + 1;
            this.displayInput(false);

        });
    }

    checkComment(focus: boolean) {
        if(focus) {
            if(this.comment == '说点啥呗') {
                this.comment = '';
            }
        }else{
            if(this.comment == '') {
                this.comment = '说点啥呗';
            }
        }
    }
}
