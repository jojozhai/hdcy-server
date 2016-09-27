import {CommonModule} from "@angular/common";
import {VideoListComponent} from "./video-list.component";
import {NgModule} from "@angular/core";
import {videoRouting} from "./video.routing";
import MirageModule from "../mirage/mirage.module";
/**
 * Created by zhailiang on 16/9/23.
 */
@NgModule({
    imports: [CommonModule, MirageModule, videoRouting],
    declarations: [VideoListComponent]
})
export default class VideoModule {
}
