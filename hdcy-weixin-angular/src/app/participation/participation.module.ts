import {NgModule} from "@angular/core";
import {participationRouting} from "./participation.routing";
import {ParticipationListComponent} from "./participation-list.component";
import MirageModule from "../shared/mirage.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [MirageModule, participationRouting],
    declarations: [ParticipationListComponent]
})
export default class ParticipationModule {
}
