import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ParticipationListComponent} from "./participation-list.component";

const participationRoutes: Routes = [
    {
        path: '',
        component: ParticipationListComponent
    }
];

export const participationRouting: ModuleWithProviders = RouterModule.forChild(participationRoutes);