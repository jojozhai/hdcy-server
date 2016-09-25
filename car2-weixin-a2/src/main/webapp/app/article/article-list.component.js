"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by zhailiang on 16/9/23.
 */
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var article_service_1 = require("./article.service");
var nav_bar_service_1 = require("../service/nav-bar.service");
var ArticleListComponent = (function () {
    function ArticleListComponent(articleService, navService) {
        this.articleService = articleService;
        this.navService = navService;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        this.articles = this.articleService.query({ size: 5 });
        this.navService.showNavEvent.emit("article");
    };
    ArticleListComponent = __decorate([
        core_1.Component({
            selector: 'article-list',
            templateUrl: 'app/article/article-list.component.html'
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, nav_bar_service_1.NavService])
    ], ArticleListComponent);
    return ArticleListComponent;
}());
exports.ArticleListComponent = ArticleListComponent;
//# sourceMappingURL=article-list.component.js.map