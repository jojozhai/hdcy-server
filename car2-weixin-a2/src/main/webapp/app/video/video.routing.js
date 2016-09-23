"use strict";
var router_1 = require("@angular/router");
var video_list_component_1 = require("./video-list.component");
var videoRoutes = [
    {
        path: '',
        component: video_list_component_1.VideoListComponent
    }
];
exports.videoRouting = router_1.RouterModule.forChild(videoRoutes);
//# sourceMappingURL=video.routing.js.map