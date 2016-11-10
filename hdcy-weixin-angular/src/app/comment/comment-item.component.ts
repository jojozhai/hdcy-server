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
    $(".com-more").on('click', function () {
      if (this.flag == 1) {
        console.log($(this).prev())
        $(this).prev().css({
          height: 'auto',
          'overflow-y': 'auto',
        });
        this.flag = 2;
      } else {
        $(this).prev().css({
          height: '55px',
          'overflow-y': 'hidden',
        });
        this.flag = 1;
      }
    })
  }

  toReplyPage(id: number) {
    if (this.target && this.targetId) {
      this.router.navigate(['/comment/input'], {
        queryParams: {
          target: this.target,
          targetId: this.targetId,
          replyToId: id
        }
      })
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
}

