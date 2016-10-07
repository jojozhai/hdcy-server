"use strict";
/**
 * Created by zhailiang on 16/9/26.
 */
var ListComponent = (function () {
    function ListComponent(route) {
        var size = route.snapshot.params['size'];
        var page = route.snapshot.params['page'];
        var sort = route.snapshot.params['sort'];
        if (!size && route.snapshot.data[0]) {
            size = route.snapshot.data[0]['size'];
        }
        if (!page && route.snapshot.data[0]) {
            page = route.snapshot.data[0]['page'];
        }
        if (!sort && route.snapshot.data[0]) {
            sort = route.snapshot.data[0]['sort'];
        }
        if (!size) {
            size = 10;
        }
        if (!page) {
            page = 0;
        }
        if (!sort) {
            sort = 'createdTime,desc';
        }
        this.pageInfo = {
            size: size,
            page: page,
            sort: sort
        };
    }
    ListComponent.prototype.buildCondition = function (condition) {
        if (!condition) {
            condition = {};
        }
        condition.page = this.pageInfo.page;
        condition.size = this.pageInfo.size;
        condition.sort = this.pageInfo.sort;
        return condition;
    };
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map
