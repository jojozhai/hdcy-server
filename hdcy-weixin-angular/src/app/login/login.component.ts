/**
 * Created by zhailiang on 16/10/9.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router) {
    console.log("haha");
    console.log(route.snapshot.queryParams['token']);
  }

  ngOnInit() {
  }

}
