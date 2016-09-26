import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {NavService} from "./mirage/service/nav-bar.service";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {

    private currentTab:string;

    private showFooter: boolean = false;

    constructor(private router: Router, private navService: NavService) { }

    ngOnInit() {
        this.navService.showNavEvent.subscribe(currentTab => {
            this.currentTab = currentTab
            this.showFooter = true;
        });

        this.navService.hideNavEvent.subscribe(() => this.showFooter = false);
    }

    navigate(targetTab:string) {
        this.router.navigateByUrl('/'+targetTab);
    }

}