/**
 * Created by zhailiang on 16/10/7.
 */
import {Component, OnInit} from "@angular/core";
import {ListComponent} from "../shared/component/list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "./comment.service";
import {environment} from "../../environments/environment";

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

  private styleType: string = "default";

  condition = {};

  cntsboxHeight: number = document.body.clientHeight - 48;
  constructor(route: ActivatedRoute, private router:Router, public commentService: CommentService) {
    super(route);
    this.target = route.snapshot.queryParams['target'];
    this.targetId = route.snapshot.queryParams['targetId'];
    this.withReply = route.snapshot.queryParams['withReply'];
    this.styleType = route.snapshot.queryParams['styleType'];
    this.condition['target'] = this.target;
    this.condition['targetId'] = this.targetId;
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
