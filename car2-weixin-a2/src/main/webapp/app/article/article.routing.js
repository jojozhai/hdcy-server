"use strict";
var router_1 = require("@angular/router");
var article_list_component_1 = require("./article-list.component");
var articleRoutes = [
    {
        path: '',
        component: article_list_component_1.ArticleListComponent
    }
];
exports.articleRouting = router_1.RouterModule.forChild(articleRoutes);
//# sourceMappingURL=article.routing.js.map