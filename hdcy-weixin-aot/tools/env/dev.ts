import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  ENV: 'DEV',
  //是否生产环境
  production: false,
  //微信appID
  appId: "wx29193bc0f671f71a",
  appLocation: "http://127.0.0.1:4200/",
  //服务地址
  serviceLocation: "http://127.0.0.1:8181/app2/",
  //当前用户token
  userToken: null
};

export = DevConfig;

