import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AboutComponent} from "./about.component";
import {AboutCompanyComponent} from "./about-company.component";
import {AboutAgreementComponent} from "./about-agreement.component";
import {AboutContactComponent} from "./about-contact.component";
import {AboutFocusComponent} from "./about-focus.component";

const aboutRoutes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'about/company', component: AboutCompanyComponent},
    {path: 'about/contact', component: AboutContactComponent},
    {path: 'about/focus', component: AboutFocusComponent},
    {path: 'about/agreement', component: AboutAgreementComponent}

];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
