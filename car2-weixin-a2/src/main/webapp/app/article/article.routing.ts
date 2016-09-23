import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ArticleListComponent} from "./article-list.component";

const articleRoutes: Routes = [
    {
        path: '',
        component: ArticleListComponent
    }
];

export const articleRouting: ModuleWithProviders = RouterModule.forChild(articleRoutes);