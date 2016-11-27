import {Component} from "@angular/core";
import {Router, NavigationEnd} from "@angular/router";
import {WeixinService} from "../service/weixin.service";
import "rxjs/add/operator/filter";

/**
 * This class represents the navigation bar component.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
})

export class NavbarComponent {

    showFooter: boolean = false;

    private showNavPaths: Array<string> = ['/video', '/article', '/activity', '/leader', '/message', '/my', '/'];

    constructor(router: Router, private weixinService: WeixinService) {
        router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                this.showOrHideFooter(event);
                if (this.showFooter) {
                    this.weixinService.configShareInfo(this.weixinService.defaultShareInfo);
                }
            });
    }

    private showOrHideFooter(event: any) {
        let url = event.url;
        if (url.indexOf("?") != -1) {
            url = url.substring(0, url.indexOf("?"));
        }
        this.showFooter = this.showNavPaths.indexOf(url) != -1
    }
}
