import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  showFooter: boolean = false;

  private showNavPaths: Array<string> = ['/video','/article','/participation','/leader','/my'];

  constructor(private router: Router) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        this.showFooter = this.showNavPaths.indexOf(event.url) != -1
      });
  }
}
