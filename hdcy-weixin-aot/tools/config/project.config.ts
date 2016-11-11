import { join } from 'path';

import { SeedConfig } from './seed.config';
import {ExtendPackages} from "./seed.config.interfaces";
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();

    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},

      {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      {src: 'toastr/build/toastr.min.js', inject: 'libs'},
      {src: 'swiper/dist/css/swiper.min.css', inject: true},
      {src: 'toastr/build/toastr.min.css', inject: true}
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. lodash)
    let additionalPackages: ExtendPackages[] = [{
      name: 'swiper',
      path: `${this.APP_BASE}node_modules/swiper/dist/js/swiper.jquery.umd.js`,
      packageMeta: {
        main: 'dist/js/swiper.jquery.umd.js',
        defaultExtension: 'js'
      }
    },{
      name: 'jquery',
      path: `${this.APP_BASE}node_modules/jquery/dist/jquery.js`,
      packageMeta: {
        main: 'dist/jquery.js',
        defaultExtension: 'js'
      }
    },{
      name: 'weixin-js-sdk',
      path: `${this.APP_BASE}node_modules/weixin-js-sdk/index.js`,
      packageMeta: {
        main: 'index.js',
        defaultExtension: 'js'
      }
    }];
    //
    // or
    //
    // let additionalPackages: ExtendPackages[] = [];
    //
    // additionalPackages.push({
    //   name: 'lodash',
    //   path: `${this.APP_BASE}node_modules/lodash/lodash.js`,
    //   packageMeta: {
    //     main: 'index.js',
    //     defaultExtension: 'js'
    //   }
    // });
    //
    this.addPackagesBundles(additionalPackages);

    /* Add to or override NPM module configurations: */
    this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
