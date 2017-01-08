import {NgModule} from "@angular/core";
import {CommentListComponent} from "./comment-list.component";
import {CommentInputComponent} from "./comment-input.component";
import {commentRouting} from "./comment.routing";
import {CommentService} from "./comment.service";
import {CommentAllComponent} from "./comment-all.component";
import {CommentItemComponent} from "./comment-item.component";
import {CommentDatePipe} from "./comment-date.pipe";
import {SharedModule} from "../shared/shared.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
  imports: [SharedModule, commentRouting],
  declarations: [CommentInputComponent, CommentListComponent, CommentAllComponent, CommentItemComponent, CommentDatePipe],
  exports: [CommentInputComponent, CommentListComponent, CommentAllComponent],
  providers: [CommentService]
})
export class CommentModule {
}
