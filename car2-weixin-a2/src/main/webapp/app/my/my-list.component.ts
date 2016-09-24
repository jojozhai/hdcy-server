/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {NavService} from "../service/nav-bar.service";

@Component({
    selector: 'my-list',
    templateUrl: 'app/my/my-list.component.html'
})
export class MyListComponent implements OnInit {

    constructor(private navService:NavService) { }

    ngOnInit() {
        this.navService.showNavEvent.emit("my");
    }

}
