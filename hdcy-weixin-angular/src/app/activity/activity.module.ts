import {NgModule} from "@angular/core";
import {activityRouting} from "./activity.routing";
import {ActivityListComponent} from "./activity-list.component";
import MirageModule from "../shared/mirage.module";
import {ActivityService} from "./activity.service";
import {ActivityDetailComponent} from "./activity-detail.component";
import {ActivityListItemComponent} from "./activity-list-item.component";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [MirageModule, activityRouting],
    declarations: [ActivityListComponent, ActivityDetailComponent, ActivityListItemComponent],
    providers: [ActivityService]
})
export default class ActivityModule {
}
