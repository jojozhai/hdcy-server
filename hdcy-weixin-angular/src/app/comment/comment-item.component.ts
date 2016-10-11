/**
 * Created by zhailiang on 16/10/9.
 */
import {Component, OnInit, Input} from "@angular/core";
import {PraiseService} from "../shared/service/praise.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment.module.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment;

  constructor(private praiseService: PraiseService) {
  }

  ngOnInit() {
  }

  praise(comment) {
    this.praiseService.create({target: 'comment', targetId: comment.id}, function (res) {
      comment.praised = !comment.praised;
      if(comment.praised){
        comment.praiseCount = comment.praiseCount + 1;
      }else{
        comment.praiseCount = comment.praiseCount - 1;
      }
    });
  }

}
