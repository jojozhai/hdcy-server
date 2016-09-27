import {Component, OnInit} from "@angular/core";
import {Router, NavigationEnd} from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

    private showFooter: boolean = false;

    private showNavPaths: Array<string> = ['/video','/participation','/article','/my'];

    constructor(private router: Router) {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                this.showFooter = this.showNavPaths.indexOf(event.url) != -1
            });
    }

    ngOnInit() {

    }

}