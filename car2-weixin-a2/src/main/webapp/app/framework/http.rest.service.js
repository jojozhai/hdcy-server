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
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var app_module_1 = require("../app.module");
var HttpRestService = (function () {
    function HttpRestService(http, domain) {
        this.http = http;
        this.domain = domain;
    }
    HttpRestService.prototype.query = function (condition) {
        return this.http.get(app_module_1.HTTP_PROFIX + this.domain, { search: this.encodeParams(condition) })
            .map(function (res) { return res.json().content; });
    };
    HttpRestService.prototype.encodeParams = function (params) {
        return Object.keys(params)
            .filter(function (key) { return params[key]; })
            .reduce(function (accum, key) {
            accum.append(key, params[key]);
            return accum;
        }, new http_1.URLSearchParams());
    };
    HttpRestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], HttpRestService);
    return HttpRestService;
}());
exports.HttpRestService = HttpRestService;
//# sourceMappingURL=http.rest.service.js.map