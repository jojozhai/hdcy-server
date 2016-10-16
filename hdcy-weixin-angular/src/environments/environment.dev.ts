export const environment = {
  //是否生产环境
  production: false,
  //微信appID
  appId: "wx29193bc0f671f71a",
  //服务地址
  serviceLocation: "http://127.0.0.1:8181/app2/",
  //当前用户token
  userToken: null,
  //登录服务地址
  getLoginServicePath: function () {
    return this.serviceLocation+"weixin/oauth/a2?state=test"
  }
};
