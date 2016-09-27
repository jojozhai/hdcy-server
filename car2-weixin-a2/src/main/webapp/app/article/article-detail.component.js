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
 * Created by zhailiang on 16/9/24.
 */
var core_1 = require('@angular/core');
var article_service_1 = require("./article.service");
var router_1 = require("@angular/router");
var ArticleDetailComponent = (function () {
    function ArticleDetailComponent(articleService, route) {
        this.articleService = articleService;
        this.route = route;
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.article = _this.articleService.get(params['id']).subscribe(function (value) { return _this.article = value; });
        });
    };
    ArticleDetailComponent = __decorate([
        core_1.Component({
            selector: 'article-detail',
            templateUrl: 'app/article/article-detail.component.html'
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, router_1.ActivatedRoute])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());
exports.ArticleDetailComponent = ArticleDetailComponent;
//# sourceMappingURL=article-detail.component.js.map