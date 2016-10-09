/**
 * Created by zhailiang on 16/10/7.
 */
import {Component, OnInit} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "./comment.service";

@Component({
  selector: 'comment-all',
  templateUrl: './comment-all.component.html',
  styleUrls: ['./comment.module.css']
})
export class CommentAllComponent extends ListComponent implements OnInit {

  private comments: Array<any>;

  private target: string;

  private targetId: number;

  private withReply: string;

  constructor(route: ActivatedRoute, public commentService: CommentService) {
    super(route);
    this.target = route.snapshot.queryParams['target'];
    this.targetId = route.snapshot.queryParams['targetId'];
    this.withReply = route.snapshot.queryParams['withReply'];
  }

  ngOnInit() {
    this.commentService.query(this.buildCondition({
      target: this.target,
      targetId: this.targetId,
      withReply: this.withReply
    })).subscribe(res => {
      this.comments = res.json().content;
    });
  }

}
