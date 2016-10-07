import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleListComponent} from "./article/article-list.component";
import {ArticleDetailComponent} from "./article/article-detail.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/video',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class HdcyWeixinAngularRoutingModule { }
