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
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var infinite_scroll_directive_1 = require("./directive/infinite-scroll.directive");
/**
 * Created by zhailiang on 16/9/26.
 */
var MirageModule = (function () {
    function MirageModule() {
    }
    MirageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [infinite_scroll_directive_1.InfiniteScrollDirective],
            exports: [infinite_scroll_directive_1.InfiniteScrollDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], MirageModule);
    return MirageModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MirageModule;
//# sourceMappingURL=mirage.module.js.map