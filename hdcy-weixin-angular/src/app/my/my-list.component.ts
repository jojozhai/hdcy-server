/**
 * Created by zhailiang on 16/9/23.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../shared/service/user.service";

@Component({
    selector: 'my-list',
    templateUrl: './my-list.component.html'
})
export class MyListComponent implements OnInit {

    user;

    constructor(private userService: UserService) {

    }

    ngOnInit() {
        this.userService.getCurrentUserInfo().subscribe(res => this.user = res.json(), err => this.userService.handleException(err));
    }

}
