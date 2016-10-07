import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ParticipationListComponent} from "./participation-list.component";

const participationRoutes: Routes = [
    {
        path: 'participation',
        component: ParticipationListComponent
    }
];

export const participationRouting: ModuleWithProviders = RouterModule.forChild(participationRoutes);
