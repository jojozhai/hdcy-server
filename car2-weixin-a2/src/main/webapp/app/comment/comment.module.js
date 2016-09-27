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
var comment_list_component_1 = require("./comment-list.component");
var comment_input_component_1 = require("./comment-input.component");
var comment_routing_1 = require("./comment.routing");
var comment_service_1 = require("./comment.service");
var mirage_module_1 = require("../mirage/mirage.module");
/**
 * Created by zhailiang on 16/9/23.
 */
var CommentModule = (function () {
    function CommentModule() {
    }
    CommentModule = __decorate([
        core_1.NgModule({
            imports: [mirage_module_1.default, comment_routing_1.commentRouting],
            declarations: [comment_input_component_1.CommentInputComponent, comment_list_component_1.CommentListComponent],
            exports: [comment_input_component_1.CommentInputComponent, comment_list_component_1.CommentListComponent],
            providers: [comment_service_1.CommentService]
        }), 
        __metadata('design:paramtypes', [])
    ], CommentModule);
    return CommentModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CommentModule;
//# sourceMappingURL=comment.module.js.map