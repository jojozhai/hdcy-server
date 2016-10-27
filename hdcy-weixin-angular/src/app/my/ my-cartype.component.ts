/**
 * Created by zhailiang on 16/9/23.
 */
import {
	Component,
	OnInit
} from "@angular/core";
import {
	UserService
} from "../shared/service/user.service";

@Component({
	selector: 'my-cartype',
	templateUrl: './my-cartype.component.html',
	styleUrls: ['./my.module.css']
})
export class MyCarComponent implements OnInit {

	user;
	cntsboxHeight: number = document.body.clientHeight - 50;
	myconHeight: number = document.body.clientHeight - 275;
	constructor(private userService: UserService) {

	}

	ngOnInit() {
//		this.userService.getCurrentUserInfo().subscribe(res => this.user = res.json(), err => this.userService.handleException(err));
	}

}