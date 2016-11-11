import {EnvConfig} from "./env-config.interface";

const ProdConfig: EnvConfig = {
    ENV: 'PROD',
    production: true,
    appId: "wx2622b448b854003a",
    appLocation: "http://cdn.haoduocheyou.com/",
    serviceLocation: "http://cdn.haoduocheyou.com/app2/",
    userToken: null
};

export = ProdConfig;

