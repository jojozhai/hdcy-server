import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ArticleListComponent} from "./article-list.component";
import {ArticleComponent} from "./article.component";
import {ArticleDetailComponent} from "./article-detail.component";

const articleRoutes: Routes = [
    {
        path: '',
        component: ArticleComponent,
        children: [
            { path: '', component: ArticleListComponent},
            { path: ':id', component: ArticleDetailComponent },
        ]
    }
];

export const articleRouting: ModuleWithProviders = RouterModule.forChild(articleRoutes);