import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {myRouting} from "./my.routing";
import {MyListComponent} from "./my-list.component";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [CommonModule, myRouting],
    declarations: [MyListComponent]
})
export default class MyModule {
}
