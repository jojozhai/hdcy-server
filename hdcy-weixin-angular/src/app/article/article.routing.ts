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
      {path: '', component: ArticleListComponent, data:[{size:20}]},
      {path: ':id', component: ArticleDetailComponent},
    ]
  }
];

export const articleRouting: ModuleWithProviders = RouterModule.forChild(articleRoutes);
