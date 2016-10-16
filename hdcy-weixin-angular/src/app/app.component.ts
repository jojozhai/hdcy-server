import {Component} from "@angular/core";
import {NavigationEnd, Router, ActivatedRoute} from "@angular/router";
import "rxjs/add/operator/filter";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  showFooter: boolean = false;

  // private wx = require('weixin-js-sdk');

  private showNavPaths: Array<string> = ['/video', '/article', '/activity', '/leader', '/my', '/'];

  constructor(private router: Router, route: ActivatedRoute) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let url = event.url;
        if (url.indexOf("?") != -1) {
          url = url.substring(0, url.indexOf("?"));
        }
        this.showFooter = this.showNavPaths.indexOf(url) != -1
      });

    let navTo = route.snapshot.queryParams['to'];
    if (navTo) {
      this.router.navigateByUrl(decodeURI(navTo));
    } else {
      this.router.navigateByUrl("video");
    }


    // this.wx.config({
    //   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //   appId: '', // 必填，公众号的唯一标识
    //   timestamp: 1, // 必填，生成签名的时间戳
    //   nonceStr: '', // 必填，生成签名的随机串
    //   signature: '',// 必填，签名，见附录1
    //   jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    // });
    //
    // this.wx.ready(function(){
    //   console.log("xixi");
    // });
    // this.wx.error(function(res){
    //   console.log(res);
    // });
  }
}
