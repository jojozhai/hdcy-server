import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {CommentListComponent} from "./comment-list.component";
import {CommentInputComponent} from "./comment-input.component";
import {commentRouting} from "./comment.routing";
import {FormsModule} from "@angular/forms";
import {CommentService} from "./comment.service";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [CommonModule, FormsModule, commentRouting],
    declarations: [CommentInputComponent, CommentListComponent],
    exports: [CommentInputComponent, CommentListComponent],
    providers: [CommentService]
})
export default class CommentModule {
}
