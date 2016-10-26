/**
 * Created by zhailiang on 16/10/24.
 */
import {Component, OnInit} from "@angular/core";
import {UserService} from "../shared/service/user.service";

@Component({
    selector: 'my-info',
    templateUrl: './my-info.component.html',
    styleUrls: ['./my.module.css']
})
export class MyInfoComponent implements OnInit {

    user;
	detailboxHeight: number = document.body.clientHeight - 48;
    constructor(private userService: UserService) {
		
    }

    ngOnInit() {
        this.userService.getCurrentUserInfo().subscribe(
            res => this.user = res.json(),
            err => this.userService.handleException(err)
                   
    }
    

}