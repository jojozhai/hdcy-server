import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {VideoListComponent} from "./video-list.component";
import {VideoDetailComponent} from "./video-detail.component";
import {ShowDetailComponent} from "./show-detail.component";

const videoRoutes: Routes = [
  {path: 'video', component: VideoListComponent},
  {path: 'video/:id', component: VideoDetailComponent},
  {path: 'show/:id', component: ShowDetailComponent},
];

export const videoRouting: ModuleWithProviders = RouterModule.forChild(videoRoutes);
