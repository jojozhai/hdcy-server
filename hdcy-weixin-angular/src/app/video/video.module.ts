import {VideoListComponent} from "./video-list.component";
import {NgModule} from "@angular/core";
import {videoRouting} from "./video.routing";
import MirageModule from "../shared/mirage.module";
import {VideoService} from "./video.service";
import {VideoDetailComponent} from "./video-detail.component";
import CommentModule from "../comment/comment.module";
import {VideoDateDirective} from "./video-date.directive";
import {ShowDetailComponent} from "./show-detail.component";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
  imports: [MirageModule, CommentModule, videoRouting],
  declarations: [VideoListComponent, VideoDetailComponent, ShowDetailComponent, VideoDateDirective],
  providers: [VideoService]
})
export default class VideoModule {
}
