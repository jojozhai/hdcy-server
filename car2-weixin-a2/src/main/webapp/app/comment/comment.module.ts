import {NgModule} from "@angular/core";
import {CommentListComponent} from "./comment-list.component";
import {CommentInputComponent} from "./comment-input.component";
import {commentRouting} from "./comment.routing";
import {CommentService} from "./comment.service";
import MirageModule from "../mirage/mirage.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [MirageModule, commentRouting],
    declarations: [CommentInputComponent, CommentListComponent],
    exports: [CommentInputComponent, CommentListComponent],
    providers: [CommentService]
})
export default class CommentModule {
}
