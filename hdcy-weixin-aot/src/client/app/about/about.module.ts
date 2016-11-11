import {NgModule} from "@angular/core";
import {AboutComponent} from "./about.component";
import {aboutRouting} from "./about.routing";
import {AboutCompanyComponent} from "./about-company.component";
import {AboutContactComponent} from "./about-contact.component";
import {AboutAgreementComponent} from "./about-agreement.component";
import {SharedModule} from "../shared/shared.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [SharedModule, aboutRouting],
    declarations: [AboutComponent, AboutCompanyComponent, AboutContactComponent, AboutAgreementComponent]
})
export class AboutModule {
}
