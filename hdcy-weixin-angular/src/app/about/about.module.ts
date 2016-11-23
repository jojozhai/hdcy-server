import {NgModule} from "@angular/core";
import MirageModule from "../shared/mirage.module";
import {AboutComponent} from "./about.component";
import {aboutRouting} from "./about.routing";
import {AboutCompanyComponent} from "./about-company.component";
import {AboutContactComponent} from "./about-contact.component";
import {AboutAgreementComponent} from "./about-agreement.component";
import {AboutFocusComponent} from "./about-focus.component";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [MirageModule, aboutRouting],
    declarations: [AboutComponent, AboutCompanyComponent,AboutFocusComponent, AboutContactComponent,AboutAgreementComponent]
})
export default class AboutModule {
}
