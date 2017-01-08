import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CommentAllComponent} from "./comment-all.component";
import {CommentInputComponent} from "./comment-input.component";

const commentRoutes: Routes = [
  {path: 'comment', component: CommentAllComponent, data:[{size: 30}]},
  {path: 'comment/input', component: CommentInputComponent}
];

export const commentRouting: ModuleWithProviders = RouterModule.forChild(commentRoutes);
