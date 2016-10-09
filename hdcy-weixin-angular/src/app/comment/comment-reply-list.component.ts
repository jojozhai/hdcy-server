/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, OnChanges} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Input} from "@angular/core/src/metadata/directives";
import {ListComponent} from "../shared/component/list.component";
import {CommentService} from "./comment.service";

@Component({
  selector: 'comment-reply-list',
  templateUrl: './comment-reply-list.component.html',
  styleUrls: ['./comment-reply-list.component.css']
})
export class CommentReplyListComponent extends ListComponent implements OnChanges {

  private comments:Array<any>;

  private count:number;

  @Input()
  private target: string;

  @Input()
  private targetId: number;

  ngOnChanges(): void {
    if (this.target && this.targetId) {
      this.commentService.query(this.buildCondition({target: this.target, targetId: this.targetId, withReply: 'true'})).subscribe(res => {
        let result = res.json();
        this.comments = result.content;
        this.count = result.totalElements;
      })
    }
  }

  constructor(route: ActivatedRoute, private commentService: CommentService) {
    super(route);
  }

}
