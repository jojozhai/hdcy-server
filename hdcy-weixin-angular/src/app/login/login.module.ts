import {NgModule} from "@angular/core";
import CommentModule from "../comment/comment.module";
import {loginRouting} from "./login.routing";
import {LoginComponent} from "./login.component";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
  imports: [CommentModule, loginRouting],
  declarations: [LoginComponent]
})
export default class LoginModule {
}
