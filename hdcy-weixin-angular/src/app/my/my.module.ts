import {NgModule} from "@angular/core";
import {myRouting} from "./my.routing";
import {MyListComponent} from "./my-list.component";
import MirageModule from "../shared/mirage.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [MirageModule, myRouting],
    declarations: [MyListComponent]
})
export default class MyModule {
}
