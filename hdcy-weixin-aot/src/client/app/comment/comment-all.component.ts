/**
 * Created by zhailiang on 16/10/7.
 */
import {Component, OnInit} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "./comment.service";
import {environment} from "../shared/config/env.config";

@Component({
  moduleId: module.id,
  selector: 'comment-all',
  templateUrl: 'comment-all.component.html',
  styleUrls: ['comment.module.css']
})
export class CommentAllComponent extends ListComponent implements OnInit {

  comments: Array<any>;

  target: string;

  targetId: number;

  withReply: string;

  styleType: string = "default";

  condition:any = {};

  cntsboxHeight: number = document.body.clientHeight - 48;
  constructor(route: ActivatedRoute, public router:Router, public commentService: CommentService) {
    super(route);
    this.target = route.snapshot.queryParams['target'];
    this.targetId = route.snapshot.queryParams['targetId'];
    this.withReply = route.snapshot.queryParams['withReply'];
    this.styleType = route.snapshot.queryParams['styleType'];
    this.condition.target = this.target;
    this.condition.targetId = this.targetId;
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

  back(){
    window.history.back();
  }

  gotoCommentInput(){
    if(environment.userToken) {
      this.router.navigateByUrl('/comment/input?target='+this.target+'&targetId='+this.targetId);
    }else{
      this.commentService.login();
    }
  }
}
