export const environment = {
  production: true,
  appId: "wx2622b448b854003a",
  appLocation: "http://cdn.haoduocheyou.com/",
  serviceLocation: "http://127.0.0.1:8181/app2/",
  userToken: null,
  getLoginServicePath: function () {
    var hash = window.location.hash;
    var encodedHash = encodeURIComponent(hash.substring(1, hash.length));
    var redirectUrl = encodeURIComponent(this.appLocation+"app2/weixin/oauth/a2");
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=${encodedHash}#wechat_redirect`;
  }
};
