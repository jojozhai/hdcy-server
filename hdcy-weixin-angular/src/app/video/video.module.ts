import {VideoListComponent} from "./video-list.component";
import {NgModule} from "@angular/core";
import {videoRouting} from "./video.routing";
import MirageModule from "../shared/mirage.module";
import {VideoService} from "./video.service";
import {VideoDetailComponent} from "./video-detail.component";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
  imports: [MirageModule, videoRouting],
  declarations: [VideoListComponent, VideoDetailComponent],
  providers: [VideoService]
})
export default class VideoModule {
}
