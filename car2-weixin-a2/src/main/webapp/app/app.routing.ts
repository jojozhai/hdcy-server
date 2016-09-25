import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/video',
        pathMatch: 'full'
    },
    {path: 'video', loadChildren: 'app/video/video.module'},
    {path: 'article', loadChildren: 'app/article/article.module'},
    {path: 'participation', loadChildren: 'app/participation/participation.module'},
    {path: 'my', loadChildren: 'app/my/my.module'},
    {path: 'comment', loadChildren: 'app/comment/comment.module'}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);