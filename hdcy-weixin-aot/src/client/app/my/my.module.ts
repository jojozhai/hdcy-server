import {NgModule} from "@angular/core";
import {myRouting} from "./my.routing";
import {MyListComponent} from "./my-list.component";
import {MyInfoComponent} from "./my-info.component";
import {MyActivityComponent} from "./my-activity.component";
import {MyService} from "./my.service";
import {MyActivityStatePipe} from "./my-activity-state.pipe";
import {SharedModule} from "../shared/shared.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [SharedModule, myRouting],
    declarations: [MyListComponent, MyInfoComponent, MyActivityComponent, MyActivityStatePipe],
    providers: [MyService]
})
export class MyModule {
}
