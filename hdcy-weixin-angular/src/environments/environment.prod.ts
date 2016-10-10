export const environment = {
  production: true,
  getLoginServicePath: function (url: string) {
    return "http://127.0.0.1:8181/app2/weixin/oauth/a2?state="+url;
  }
};
