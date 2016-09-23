import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MyListComponent} from "./my-list.component";

const myRoutes: Routes = [
    {
        path: '',
        component: MyListComponent
    }
];

export const myRouting: ModuleWithProviders = RouterModule.forChild(myRoutes);