export const environment = {
  production: true,
  appId: "wxce8eb11c51670a1d",
  serviceLocation: "http://dev.haoduocheyou.com/app2/",
  userToken: null,
  getLoginServicePath: function (url: string) {
    return this.serviceLocation+"weixin/oauth/a2?state=test"
  }
};
