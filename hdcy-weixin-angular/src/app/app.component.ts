import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import "rxjs/add/operator/filter";
import {WeixinService} from "./shared/service/weixin.service";
import {LoadingService} from "./shared/service/loading.service";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  showFooter: boolean = false;

  loading: boolean = false;

  private showNavPaths: Array<string> = ['/video', '/article', '/activity', '/leader', '/message', '/my', '/'];

  constructor(router: Router, private weixinService: WeixinService, loadingService: LoadingService) {

    weixinService.initWx();

    loadingService.loadingEvent.subscribe(loading => {
      this.loading = loading;
    });

    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        this.showOrHideFooter(event);
        this.weixinService.configShareInfo(this.weixinService.defaultShareInfo);
      });

    weixinService.weixinShareInfoChangedEvent.subscribe(event => this.weixinService.configShareInfo(event));

    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": true,
      "progressBar": false,
      "positionClass": "toast-bottom-center",
      "preventDuplicates": true,
      "onclick": null,
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }

  ngOnInit(): void {

  }

  private showOrHideFooter(event) {
    let url = event.url;
    if (url.indexOf("?") != -1) {
      url = url.substring(0, url.indexOf("?"));
    }
    this.showFooter = this.showNavPaths.indexOf(url) != -1
  }

}
