import {CommonModule} from "@angular/common";
import {VideoListComponent} from "./video-list.component";
import {NgModule} from "@angular/core";
import {videoRouting} from "./video.routing";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [CommonModule, videoRouting],
    declarations: [VideoListComponent]
})
export default class VideoModule {
}
