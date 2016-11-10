/**
 * Created by zhailiang on 16/10/9.
 */
import {Component, OnInit, Input} from "@angular/core";
import {PraiseService} from "../shared/service/praise.service";
import {environment} from "../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment.module.css']
})
export class CommentItemComponent implements OnInit {

  @Input() private comment;

  @Input() private styleType: string = "default";

  target: string;

  targetId: any;

  constructor(public route: ActivatedRoute, public router: Router, public praiseService: PraiseService) {
    this.target = route.snapshot.queryParams['target'];
    this.targetId = route.snapshot.queryParams['targetId'];
  }

  flag = 1;

  ngOnInit() {

  }

  toReplyPage(id:number){
    if(this.target && this.targetId) {
      this.router.navigate(['/comment/input'], {queryParams: {target: this.target, targetId: this.targetId, replyToId: id}})
    }
  }

  praise(comment) {
    this.praiseService.create({target: 'comment', targetId: comment.id}, function (res) {
      comment.praised = !comment.praised;
      if (comment.praised) {
        comment.praiseCount = comment.praiseCount + 1;
      } else {
        comment.praiseCount = comment.praiseCount - 1;
      }
    });
  }

  morcom() {
    if (this.flag == 1) {
      $(".commments .morecoms").css({
        height: 'auto',
        'overflow-y': 'auto',
      });
      this.flag = 2;
    } else {
      for (var i = 0; i < $(".commments .morecoms").length; i++) {
        if ($(".commments .morecoms").eq(i).height() != 0) {
          $(".commments .com-more").prev().css({
            height: '55px',
            'overflow-y': 'hidden',

          });
        }
      }

    }
  }

}

