import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ActivityListComponent} from "./activity-list.component";
import {ActivityDetailComponent} from "./activity-detail.component";

const activityRoutes: Routes = [
  {path: 'activity', component: ActivityListComponent, data: [{size: 15}]},
  {path: 'activity/:id', component: ActivityDetailComponent},
];

export const activityRouting: ModuleWithProviders = RouterModule.forChild(activityRoutes);
