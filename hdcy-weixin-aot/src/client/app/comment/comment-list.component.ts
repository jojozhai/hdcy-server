/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, OnChanges, Output, EventEmitter, SimpleChanges} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Input} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {CommentService} from "./comment.service";
import {environment} from "../shared/config/env.config";

@Component({
  moduleId: module.id,
  selector: 'comment-list',
  templateUrl: 'comment-list.component.html',
  styleUrls: ['comment.module.css']
})
export class CommentListComponent extends ListComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
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

  comments: Array<any>;

  count: number;

  @Input() target: string;

  @Input() targetId: number;

  @Input() size: number = 5;

  @Input() styleType: string = "default";

  @Input() withReply: string = 'false';

  @Output() commentCount: EventEmitter<number> = new EventEmitter<number>();


  isActived(styleType: any) {
    return this.styleType == styleType;
  }

  constructor(route: ActivatedRoute, public router: Router, public commentService: CommentService) {
    super(route);
  }

  gotoCommentInput() {
    console.log("in");
    console.log(environment);
    console.log(environment.userToken);
    if (environment.userToken) {
      this.router.navigateByUrl('/comment/input?target=' + this.target + '&targetId=' + this.targetId);
    } else {
      this.commentService.login();
    }
  }

  gotoCommentList() {
    if (environment.userToken) {
      this.router.navigateByUrl('/comment?target=' + this.target + '&targetId=' + this.targetId + "&withReply=" + this.withReply);
    } else {
      this.commentService.login();
    }
  }
}
