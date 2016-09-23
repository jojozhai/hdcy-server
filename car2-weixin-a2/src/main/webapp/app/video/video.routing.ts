import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {VideoListComponent} from "./video-list.component";

const videoRoutes: Routes = [
    {
        path: '',
        component: VideoListComponent
    }
];

export const videoRouting: ModuleWithProviders = RouterModule.forChild(videoRoutes);