/**
 * Created by zhailiang on 16/10/18.
 */
import {Injectable, EventEmitter, OnInit} from "@angular/core";
import {environment} from "../../../environments/environment";
import {Http} from "@angular/http";

export class WeixinShareInfoChangedEvent {

  constructor(public title: string,
              public imgUrl?: string,
              public desc?: string,
              public link?: string) {

    if (!desc) {
      this.desc = title;
    }

  }
}

@Injectable()
export class WeixinService implements OnInit {

  private wx = require('weixin-js-sdk');

  defaultShareInfo = new WeixinShareInfoChangedEvent("汽车运动 从你不一样", "http://img.haoduocheyou.com/logo.jpg");

  weixinShareInfoChangedEvent: EventEmitter<WeixinShareInfoChangedEvent> = new EventEmitter<WeixinShareInfoChangedEvent>();

  constructor(private http: Http) {

  }

  ngOnInit(): void {

  }

  initWx() {

    this.wx.ready(() => {
      console.log("weixin init success");
      this.configShareInfo(this.defaultShareInfo);
    });

    this.wx.error((res) => {
      console.log(res);
    });

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

  fileUpload(callback, limit: number = 1) {
    this.wx.chooseImage({
      count: limit, // 默认1
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        if (localIds && localIds.length > 0) {
          this.weixinUpload(localIds, callback);
        }
      }
    });
  }

  private weixinUpload(ids, callback) {
    var dealId = ids.shift();
    this.wx.uploadImage({
      localId: dealId,
      success: (res) => {
        this.http.post(environment.serviceLocation + "weixin/upload", res.serverId).subscribe(res => {
          callback(res.json().content);
          if (ids.length > 0) {
            this.weixinUpload(ids, callback);
          }
        })
      },
      fail: (res) => {
        toastr.error("上传图片失败");
      }
    });
  };

  configShareInfo(event: WeixinShareInfoChangedEvent) {
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
