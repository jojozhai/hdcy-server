import {NgModule} from "@angular/core";
import {leaderRouting} from "./leader.routing";
import {LeaderListComponent} from "./leader-list.component";
import {LeaderService} from "./leader.service";
import {LeaderDetailComponent} from "./leader-detail.component";
import {SharedModule} from "../shared/shared.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
  imports: [SharedModule, leaderRouting],
  declarations: [LeaderListComponent, LeaderDetailComponent],
  providers: [LeaderService]
})
export class LeaderModule {
}
