import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ActivityListComponent} from "./activity-list.component";
import {ActivityDetailComponent} from "./activity-detail.component";
import {ActivitySignComponent} from "./activity-sign.component";

const activityRoutes: Routes = [
  {path: 'activity', component: ActivityListComponent, data: [{size: 15}]},
  {path: 'activity/sign', component: ActivitySignComponent},
  {path: 'activity/:id', component: ActivityDetailComponent},
];

export const activityRouting: ModuleWithProviders = RouterModule.forChild(activityRoutes);
