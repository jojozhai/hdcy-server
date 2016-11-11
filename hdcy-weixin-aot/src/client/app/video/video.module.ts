import {VideoListComponent} from "./video-list.component";
import {NgModule} from "@angular/core";
import {videoRouting} from "./video.routing";
import {VideoService} from "./video.service";
import {VideoDetailComponent} from "./video-detail.component";
import {CommentModule} from "../comment/comment.module";
import {ShowDetailComponent} from "./show-detail.component";
import {SharedModule} from "../shared/shared.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
  imports: [SharedModule, CommentModule, videoRouting],
  declarations: [VideoListComponent, VideoDetailComponent, ShowDetailComponent],
  providers: [VideoService]
})
export class VideoModule {
}
