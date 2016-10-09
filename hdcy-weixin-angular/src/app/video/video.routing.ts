import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {VideoListComponent} from "./video-list.component";
import {VideoDetailComponent} from "./video-detail.component";

const videoRoutes: Routes = [
  {path: 'video', component: VideoListComponent},
  {path: 'video/:id', component: VideoDetailComponent},
];

export const videoRouting: ModuleWithProviders = RouterModule.forChild(videoRoutes);
