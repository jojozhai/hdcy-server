import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LeaderListComponent} from "./leader-list.component";
import {LeaderDetailComponent} from "./leader-detail.component";

const leaderRoutes: Routes = [
  {path: 'leader', component: LeaderListComponent},
  {path: 'leader/:id', component: LeaderDetailComponent}
];

export const leaderRouting: ModuleWithProviders = RouterModule.forChild(leaderRoutes);
