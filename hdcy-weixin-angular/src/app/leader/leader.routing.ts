import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LeaderListComponent} from "./leader-list.component";

const leaderRoutes: Routes = [
    {
        path: 'leader',
        component: LeaderListComponent
    }
];

export const leaderRouting: ModuleWithProviders = RouterModule.forChild(leaderRoutes);
