export const environment = {
  production: true,
  appId: "wx2622b448b854003a",
  serviceLocation: "http://app.haoduocheyou.com/app2/",
  userToken: null,
  getLoginServicePath: function (url: string) {
    return this.serviceLocation+"weixin/oauth/a2?state=test";
  }
};
