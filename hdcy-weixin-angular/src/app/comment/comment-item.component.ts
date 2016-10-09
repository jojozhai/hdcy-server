/**
 * Created by zhailiang on 16/10/9.
 */
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment;

  constructor() {
  }

  ngOnInit() {
  }

}
