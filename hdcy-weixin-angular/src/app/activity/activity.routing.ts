import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ActivityListComponent} from "./activity-list.component";

const activityRoutes: Routes = [
    { path: 'activity', component: ActivityListComponent, data:[{size: 15}] }
];

export const activityRouting: ModuleWithProviders = RouterModule.forChild(activityRoutes);
