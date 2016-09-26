/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {NavService} from "../mirage/service/nav-bar.service";

@Component({
    selector: 'video-list',
    templateUrl: 'app/video/video-list.component.html'
})
export class VideoListComponent implements OnInit {

    constructor(private navService: NavService) { }

    ngOnInit() {
        this.navService.showNavEvent.emit("video");
    }

}
