// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

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
  getLoginServicePath: function (url?: string) {
    return this.serviceLocation+"weixin/oauth/a2?state=test"
  }
};
