import {NgModule} from "@angular/core";
import {activityRouting} from "./activity.routing";
import {ActivityListComponent} from "./activity-list.component";
import MirageModule from "../shared/mirage.module";
import {ActivityService} from "./activity.service";
import {ActivityDetailComponent} from "./activity-detail.component";
import {ActivityListItemComponent} from "./activity-list-item.component";
import CommentModule from "../comment/comment.module";
import {ActivitySignComponent} from "./activity-sign.component";
import {ActivityDatePipe} from "./activity-date.pipe";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
  imports: [MirageModule, CommentModule, activityRouting],
  declarations: [ActivityListComponent, ActivityDetailComponent, ActivityListItemComponent, ActivitySignComponent, ActivityDatePipe],
  providers: [ActivityService]
})
export default class ActivityModule {
}
