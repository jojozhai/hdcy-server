import {NgModule} from "@angular/core";
import {leaderRouting} from "./leader.routing";
import {LeaderListComponent} from "./leader-list.component";
import MirageModule from "../shared/mirage.module";
import {LeaderService} from "./leader.service";
import {LeaderDetailComponent} from "./leader-detail.component";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
  imports: [MirageModule, leaderRouting],
  declarations: [LeaderListComponent, LeaderDetailComponent],
  providers: [LeaderService]
})
export default class LeaderModule {
}
