"use strict";
var router_1 = require("@angular/router");
var comment_list_component_1 = require("./comment-list.component");
var commentRoutes = [
    { path: 'comment', component: comment_list_component_1.CommentListComponent }
];
exports.commentRouting = router_1.RouterModule.forChild(commentRoutes);
//# sourceMappingURL=comment.routing.js.map