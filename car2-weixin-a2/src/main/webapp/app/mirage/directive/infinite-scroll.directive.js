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
var core_1 = require("@angular/core");
var http_rest_service_1 = require("../service/http-rest.service");
/**
 * Created by zhailiang on 16/9/26.
 */
var InfiniteScrollDirective = (function () {
    function InfiniteScrollDirective(el) {
        this.el = el;
        this.dataList = [];
        this.loading = false;
        this.max = 0;
    }
    InfiniteScrollDirective.prototype.onScroll = function () {
        var _this = this;
        if (this.loading) {
            return;
        }
        var height = this.el.nativeElement.offsetHeight;
        var scrollHeight = this.el.nativeElement.scrollHeight;
        var scrollTop = this.el.nativeElement.scrollTop;
        if (height + scrollTop >= scrollHeight - 100 && height + scrollTop > this.max) {
            this.max = scrollHeight + 100;
            this.loading = true;
            this.pageInfo.page = this.pageInfo.page + 1;
            this.httpRestService.query(this.pageInfo).subscribe(function (res) {
                for (var _i = 0, _a = res.json().content; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _this.dataList.push(item);
                }
                _this.loading = false;
            }, function (err) { return console.log(err); });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', http_rest_service_1.HttpRestService)
    ], InfiniteScrollDirective.prototype, "httpRestService", void 0);
    __decorate([
        core_1.Input('infinite-scroll'), 
        __metadata('design:type', Array)
    ], InfiniteScrollDirective.prototype, "dataList", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], InfiniteScrollDirective.prototype, "pageInfo", void 0);
    __decorate([
        core_1.HostListener("scroll"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], InfiniteScrollDirective.prototype, "onScroll", null);
    InfiniteScrollDirective = __decorate([
        core_1.Directive({ selector: '[infinite-scroll]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], InfiniteScrollDirective);
    return InfiniteScrollDirective;
}());
exports.InfiniteScrollDirective = InfiniteScrollDirective;
//# sourceMappingURL=infinite-scroll.directive.js.map