import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import "rxjs/add/operator/filter";
import {environment} from "../environments/environment";
import {Http} from "@angular/http";
import {WeixinShareInfoChangedEvent, WeixinService} from "./shared/service/weixin.service";
import {LoadingService} from "./shared/service/loading.service";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  showFooter: boolean = false;

  loading:boolean = false;

  private wx = require('weixin-js-sdk');

  private showNavPaths: Array<string> = ['/video', '/article', '/activity', '/leader', '/message', '/my', '/'];

  private defaultShareInfo = new WeixinShareInfoChangedEvent("汽车运动 从你不一样", "http://img.haoduocheyou.com/logo.jpg");

  constructor(router: Router, private http: Http, weixinService: WeixinService, loadingService:LoadingService) {

    loadingService.loadingEvent.subscribe(loading => {
      console.log(loading);
      this.loading = loading;
    });

    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        this.showOrHideFooter(event);
        this.configShareInfo(this.defaultShareInfo);
      });

    weixinService.weixinShareInfoChangedEvent.subscribe(event => this.configShareInfo(event));

    this.wx.ready(() => {
      console.log("weixin init success");
      this.configShareInfo(this.defaultShareInfo);
    });

    this.wx.error((res) => {
      console.log(res);
    });

    toastr.options = {
      "closeButton" : false,
      "debug" : false,
      "newestOnTop" : true,
      "progressBar" : false,
      "positionClass" : "toast-bottom-center",
      "preventDuplicates" : true,
      "onclick" : null,
      "showEasing" : "swing",
      "hideEasing" : "linear",
      "showMethod" : "fadeIn",
      "hideMethod" : "fadeOut"
    }
  }

  ngOnInit(): void {
    let url = environment.serviceLocation + "weixin/jsapiTicket?url=" + environment.appLocation;
    this.http.get(url).subscribe(res => {
      let info = res.json();
      this.wx.config({
        debug: !environment.production, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: environment.appId, // 必填，公众号的唯一标识
        timestamp: info.timestamp, // 必填，生成签名的时间戳
        nonceStr: info.nonceStr, // 必填，生成签名的随机串
        signature: info.signature,// 必填，签名，见附录1
        jsApiList: this.weixinJsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
    });
  }

  private configShareInfo(event: WeixinShareInfoChangedEvent) {
//  console.log(event);
    this.wx.onMenuShareTimeline({
      title: event.title,
      link: event.link,
      imgUrl: event.imgUrl,
      success: function () {
      },
      cancel: function () {
      }
    });

    this.wx.onMenuShareAppMessage({
      title: event.title,
      desc: event.desc,
      link: event.link,
      imgUrl: event.imgUrl,
      success: function () {
      },
      cancel: function () {
      }
    });

    this.wx.onMenuShareQQ({
      title: event.title,
      desc: event.desc,
      link: event.link,
      imgUrl: event.imgUrl,
      success: function () {
      },
      cancel: function () {
      }
    });

    this.wx.onMenuShareWeibo({
      title: event.title,
      desc: event.desc,
      link: event.link,
      imgUrl: event.imgUrl,
      success: function () {
      },
      cancel: function () {
      }
    });

    this.wx.onMenuShareQZone({
      title: event.title,
      desc: event.desc,
      link: event.link,
      imgUrl: event.imgUrl,
      success: function () {
      },
      cancel: function () {
      }
    });
  }

  private showOrHideFooter(event) {
    let url = event.url;
    if (url.indexOf("?") != -1) {
      url = url.substring(0, url.indexOf("?"));
    }
    this.showFooter = this.showNavPaths.indexOf(url) != -1
  }

  private weixinJsApiList = [
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'onMenuShareQZone',
    'startRecord',
    'stopRecord',
    'onVoiceRecordEnd',
    'playVoice',
    'pauseVoice',
    'stopVoice',
    'onVoicePlayEnd',
    'uploadVoice',
    'downloadVoice',
    'chooseImage',
    'previewImage',
    'uploadImage',
    'downloadImage',
    'translateVoice',
    'getNetworkType',
    'openLocation',
    'getLocation',
    'hideOptionMenu',
    'showOptionMenu',
    'hideMenuItems',
    'showMenuItems',
    'hideAllNonBaseMenuItem',
    'showAllNonBaseMenuItem',
    'closeWindow',
    'scanQRCode',
    'chooseWXPay',
    'openProductSpecificView',
    'addCard',
    'chooseCard',
    'openCard'];
}
