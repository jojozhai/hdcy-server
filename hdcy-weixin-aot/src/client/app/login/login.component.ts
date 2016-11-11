/**
 * Created by zhailiang on 16/10/9.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../shared/config/env.config";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router) {
    environment.userToken = route.snapshot.queryParams['token'];
    let from = decodeURIComponent(route.snapshot.queryParams['from']);
    if (from == 'test') {
      router.navigateByUrl("/video");
    } else {
      router.navigateByUrl(from);
    }
  }

  ngOnInit() {
  }

}
