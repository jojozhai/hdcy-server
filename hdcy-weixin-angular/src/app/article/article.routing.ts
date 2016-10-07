import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ArticleListComponent} from "./article-list.component";
import {ArticleDetailComponent} from "./article-detail.component";
import {ArticleComponent} from "./article.component";

const articleRoutes: Routes = [
  {
    path: 'article',
    component: ArticleComponent,
    children: [
      {path: '', component: ArticleListComponent},
      {path: ':id', component: ArticleDetailComponent, data:[{size: 5}]},
    ]
  }
];

export const articleRouting: ModuleWithProviders = RouterModule.forChild(articleRoutes);
