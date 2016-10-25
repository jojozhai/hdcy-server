/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, OnChanges, Output, EventEmitter} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Input} from "@angular/core/src/metadata/directives";
import {ListComponent} from "../shared/component/list.component";
import {CommentService} from "./comment.service";

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment.module.css']
})
export class CommentListComponent extends ListComponent implements OnChanges {

  private comments: Array<any>;

  private count: number;

  @Input() private target: string;

  @Input() private targetId: number;

  @Input() private size: number = 5;

  @Input() private styleType: string = "default";

  @Input() private withReply: string = 'false';

  @Output() commentCount: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(): void {
    if (this.target && this.targetId) {
      this.commentService.query(this.buildCondition({
        target: this.target,
        targetId: this.targetId,
        size: this.size,
        withReply: this.withReply
      })).subscribe(res => {
        let result = res.json();
        this.comments = result.content;
        this.count = result.totalElements;
        this.commentCount.emit(this.count);
      })
    }
  }

  isActived(styleType) {
    return this.styleType == styleType;
  }

  constructor(route: ActivatedRoute, private commentService: CommentService) {
    super(route);
  }

}
