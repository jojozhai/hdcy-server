import {NgModule} from "@angular/core";
import {activityRouting} from "./activity.routing";
import {ActivityListComponent} from "./activity-list.component";
import MirageModule from "../shared/mirage.module";
import {ActivityService} from "./activity.service";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [MirageModule, activityRouting],
    declarations: [ActivityListComponent],
    providers: [ActivityService]
})
export default class ActivityModule {
}
