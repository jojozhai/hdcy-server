import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {participationRouting} from "./participation.routing";
import {ParticipationListComponent} from "./participation-list.component";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [CommonModule, participationRouting],
    declarations: [ParticipationListComponent]
})
export default class ParticipationModule {
}
