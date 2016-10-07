/**
 * Created by zhailiang on 16/9/24.
 */
import {Component, OnChanges} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Input} from "@angular/core/src/metadata/directives";
import {ListComponent} from "../shared/component/list.component";
import {CommentService} from "./comment.service";

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent extends ListComponent implements OnChanges {

  private comments:Array<any>;

  private count:number;

  ngOnChanges(): void {
    if (this.target && this.targetId) {
      this.commentService.query(this.buildCondition({target: this.target, targetId: this.targetId})).subscribe(res => {
        let result = res.json();
        this.comments = result.content;
        this.count = result.totalElements;
      })
    }
  }

  @Input()
  private target: string;

  @Input()
  private targetId: number;

  constructor(route: ActivatedRoute, private commentService: CommentService) {
    super(route);
  }

}
