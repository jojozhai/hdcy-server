/**
 * Created by zhailiang on 16/10/24.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../shared/service/user.service";

@Component({
    selector: 'my-info',
    templateUrl: './my-info.component.html'
})
export class MyInfoComponent implements OnInit {

    user;

    constructor(private userService: UserService) {

    }

    ngOnInit() {
        this.userService.getCurrentUserInfo().subscribe(
            res => this.user = res.json(),
            err => this.userService.handleException(err)
        );
    }

}