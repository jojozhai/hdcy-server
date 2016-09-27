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
var core_1 = require("@angular/core");
var comment_service_1 = require("./comment.service");
var CommentInputComponent = (function () {
    function CommentInputComponent(commentService) {
        this.commentService = commentService;
        this.comment = '说点啥呗';
        this.commentCount = 0;
        this.showCount = "block";
        this.inputDivDisplay = 'none';
    }
    CommentInputComponent.prototype.ngOnInit = function () {
    };
    CommentInputComponent.prototype.displayInput = function (show) {
        this.inputDivDisplay = show ? 'block' : 'none';
    };
    CommentInputComponent.prototype.saveComment = function () {
        var _this = this;
        this.commentService.create({
            target: this.target,
            targetId: this.targetId,
            content: this.comment
        }, function () {
            _this.comment = '说点啥呗';
            _this.commentCount = _this.commentCount + 1;
            _this.displayInput(false);
        });
    };
    CommentInputComponent.prototype.checkComment = function (focus) {
        if (focus) {
            if (this.comment == '说点啥呗') {
                this.comment = '';
            }
        }
        else {
            if (this.comment == '') {
                this.comment = '说点啥呗';
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentInputComponent.prototype, "target", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CommentInputComponent.prototype, "targetId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CommentInputComponent.prototype, "showCount", void 0);
    CommentInputComponent = __decorate([
        core_1.Component({
            selector: 'comment-input',
            templateUrl: 'app/comment/comment-input.component.html',
            styleUrls: ['app/comment/comment-input.component.css']
        }), 
        __metadata('design:paramtypes', [comment_service_1.CommentService])
    ], CommentInputComponent);
    return CommentInputComponent;
}());
exports.CommentInputComponent = CommentInputComponent;
//# sourceMappingURL=comment-input.component.js.map