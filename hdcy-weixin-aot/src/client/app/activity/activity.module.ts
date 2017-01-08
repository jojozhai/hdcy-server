import {NgModule} from "@angular/core";
import {activityRouting} from "./activity.routing";
import {ActivityListComponent} from "./activity-list.component";
import {ActivityService} from "./activity.service";
import {ActivityDetailComponent} from "./activity-detail.component";
import {ActivityListItemComponent} from "./activity-list-item.component";
import {ActivitySignComponent} from "./activity-sign.component";
import {SharedModule} from "../shared/shared.module";
import {CommentModule} from "../comment/comment.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
  imports: [SharedModule, CommentModule, activityRouting],
  declarations: [ActivityListComponent, ActivityDetailComponent, ActivityListItemComponent, ActivitySignComponent],
  providers: [ActivityService]
})
export class ActivityModule {
}
