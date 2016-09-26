"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var nav_bar_service_1 = require("../mirage/service/nav-bar.service");
var list_component_1 = require("../mirage/component/list.component");
var router_1 = require("@angular/router");
var ArticleListComponent = (function (_super) {
    __extends(ArticleListComponent, _super);
    function ArticleListComponent(articleService, route, navService) {
        _super.call(this, route);
        this.articleService = articleService;
        this.route = route;
        this.navService = navService;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.query(this.pageInfo).subscribe(function (res) { return _this.articles = res.json().content; });
        this.navService.showNavEvent.emit("article");
    };
    ArticleListComponent = __decorate([
        core_1.Component({
            selector: 'article-list',
            templateUrl: 'app/article/article-list.component.html'
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService, router_1.ActivatedRoute, nav_bar_service_1.NavService])
    ], ArticleListComponent);
    return ArticleListComponent;
}(list_component_1.ListComponent));
exports.ArticleListComponent = ArticleListComponent;
//# sourceMappingURL=article-list.component.js.map