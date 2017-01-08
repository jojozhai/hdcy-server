/**
 * Created by zhailiang on 16/10/18.
 */
import {Injectable, EventEmitter, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {environment} from "../config/env.config";

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

    fileUploadFinishEvent: EventEmitter<string> = new EventEmitter<string>();

    defaultShareInfo = new WeixinShareInfoChangedEvent("汽车运动 从你不一样", "http://img.haoduocheyou.com/hdcy.png");

    weixinShareInfoChangedEvent: EventEmitter<WeixinShareInfoChangedEvent> = new EventEmitter<WeixinShareInfoChangedEvent>();

    weixinReadyEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private http: Http) {
        this.initWx(() => {
            this.configShareInfo(this.defaultShareInfo);
        })
    }

    initWx(callback:any) {

    }

    ngOnInit(): void {


    }

    configShareInfo(event: WeixinShareInfoChangedEvent) {

        console.log("weixin init start");

        var wx = require('weixin-js-sdk');
        var url = environment.serviceLocation + "weixin/jsapiTicket?url=" + encodeURIComponent(environment.appLocation);

        this.http.get(url).subscribe(res => {
            
            let info = res.json();

            wx.ready(() => {

                var title:string = event.title;
                var link:string = event.link;
                var desc:string = event.desc;
                var imgUrl:string = event.imgUrl;

                console.log("weixin init success");

                wx.onMenuShareTimeline({
                    title: title,
                    link: link,
                    imgUrl: imgUrl,
                    success: function () {
                    },
                    cancel: function () {
                    }
                });

                wx.onMenuShareAppMessage({
                    title: title,
                    desc: desc,
                    link: link,
                    imgUrl: imgUrl,
                    success: function () {
                    },
                    cancel: function () {
                    }
                });

                wx.onMenuShareQQ({
                    title: title,
                    desc: desc,
                    link: link,
                    imgUrl: imgUrl,
                    success: function () {
                    },
                    cancel: function () {
                    }
                });

                wx.onMenuShareWeibo({
                    title: title,
                    desc: desc,
                    link: link,
                    imgUrl: imgUrl,
                    success: function () {
                    },
                    cancel: function () {
                    }
                });

                wx.onMenuShareQZone({
                    title: title,
                    desc: desc,
                    link: link,
                    imgUrl: imgUrl,
                    success: function () {
                    },
                    cancel: function () {
                    }
                });
            });

            wx.config({
                debug: !environment.production, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: environment.appId, // 必填，公众号的唯一标识
                timestamp: info.timestamp, // 必填，生成签名的时间戳
                nonceStr: info.nonceStr, // 必填，生成签名的随机串
                signature: info.signature,// 必填，签名，见附录1
                jsApiList: this.weixinJsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });

        });
    }

    weixinJsApiList = [
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
