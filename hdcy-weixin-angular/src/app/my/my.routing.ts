import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MyListComponent} from "./my-list.component";
import {MyInfoComponent} from "./my-info.component";
import {MyActivityComponent} from "./my-activity.component";

const myRoutes: Routes = [
    {path: 'my', component: MyListComponent},
    {path: 'my/info', component: MyInfoComponent},
    {path: 'my/activity', component: MyActivityComponent}

];

export const myRouting: ModuleWithProviders = RouterModule.forChild(myRoutes);
