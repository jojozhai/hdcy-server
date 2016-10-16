export const environment = {
  production: true,
  appId: "wxce8eb11c51670a1d",
  serviceLocation: "http://cdn4dev.haoduocheyou.com/app2/",
  userToken: null,
  getLoginServicePath: function () {
    var hash = window.location.hash;
    var encodedHash = encodeURIComponent(hash.substring(1, hash.length));
    var redirectUrl = encodeURIComponent(this.serviceLocation+"weixin/oauth/a2");
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=${encodedHash}#wechat_redirect`;
  }

};
