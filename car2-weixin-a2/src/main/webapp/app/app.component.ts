import {Component, OnInit} from "@angular/core";
import {Router, NavigationEnd} from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {

    private currentTab: string;

    private showFooter: boolean = false;

    private showNavPaths: Array<string> = ['/video','/participation','/article','/my'];

    constructor(private router: Router) {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                this.showFooter = this.showNavPaths.indexOf(event.url) != -1
                this.currentTab = event.url.substring(1, event.url.length);
            });
    }

    ngOnInit() {

    }

    navigate(targetTab:string) {
        this.router.navigateByUrl('/'+targetTab);
    }

}