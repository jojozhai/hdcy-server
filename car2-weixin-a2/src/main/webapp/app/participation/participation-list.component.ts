/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {NavService} from "../service/nav-bar.service";

@Component({
    selector: 'participation-list',
    templateUrl: 'app/participation/participation-list.component.html'
})
export class ParticipationListComponent implements OnInit {

    constructor(private navService: NavService) { }

    ngOnInit() {
        this.navService.showNavEvent.emit("participation");
    }

}
