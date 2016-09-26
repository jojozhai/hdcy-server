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
var router_1 = require("@angular/router");
var nav_bar_service_1 = require("./mirage/service/nav-bar.service");
var AppComponent = (function () {
    function AppComponent(router, navService) {
        this.router = router;
        this.navService = navService;
        this.showFooter = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navService.showNavEvent.subscribe(function (currentTab) {
            _this.currentTab = currentTab;
            _this.showFooter = true;
        });
        this.navService.hideNavEvent.subscribe(function () { return _this.showFooter = false; });
    };
    AppComponent.prototype.navigate = function (targetTab) {
        this.router.navigateByUrl('/' + targetTab);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, nav_bar_service_1.NavService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map