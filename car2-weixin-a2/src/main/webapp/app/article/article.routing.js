"use strict";
var router_1 = require("@angular/router");
var article_list_component_1 = require("./article-list.component");
var article_component_1 = require("./article.component");
var article_detail_component_1 = require("./article-detail.component");
var articleRoutes = [
    {
        path: '',
        component: article_component_1.ArticleComponent,
        children: [
            { path: '', component: article_list_component_1.ArticleListComponent },
            { path: ':id', component: article_detail_component_1.ArticleDetailComponent },
        ]
    }
];
exports.articleRouting = router_1.RouterModule.forChild(articleRoutes);
//# sourceMappingURL=article.routing.js.map