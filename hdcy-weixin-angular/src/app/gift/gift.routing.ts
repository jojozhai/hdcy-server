import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {GiftListComponent} from "./gift-list.component";
import {GiftDetailComponent} from "./gift-detail.component";

const giftRoutes: Routes = [
    {path: 'gift', component: GiftListComponent},
    {path: 'gift/:id', component: GiftDetailComponent}
];

export const giftRouting: ModuleWithProviders = RouterModule.forChild(giftRoutes);
