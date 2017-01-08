// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  ENV?: string;
  //是否生产环境
  production?: boolean;
  //微信appID
  appId?: string;
  appLocation?: string;
  //服务地址
  serviceLocation?: string;
  //当前用户token
  userToken?: string;
}

export const environment: EnvConfig = JSON.parse('<%= ENV_CONFIG %>');

