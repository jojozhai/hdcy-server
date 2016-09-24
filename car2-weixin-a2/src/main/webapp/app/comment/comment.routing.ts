import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CommentListComponent} from "./comment-list.component";

const commentRoutes: Routes = [
    {path: 'comment', component: CommentListComponent}
];

export const commentRouting: ModuleWithProviders = RouterModule.forChild(commentRoutes);