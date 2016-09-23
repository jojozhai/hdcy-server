"use strict";
var router_1 = require("@angular/router");
var appRoutes = [
    {
        path: '',
        redirectTo: '/video',
        pathMatch: 'full'
    },
    { path: 'video', loadChildren: 'app/video/video.module' },
    { path: 'article', loadChildren: 'app/article/article.module' },
    { path: 'participation', loadChildren: 'app/participation/participation.module' },
    { path: 'my', loadChildren: 'app/my/my.module' }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map