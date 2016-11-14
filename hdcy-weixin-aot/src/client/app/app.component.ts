import {Component} from "@angular/core";
import "./operators";
import {environment} from "./shared/config/env.config";
import {LoadingService} from "./shared/service/loading.service";
import {WeixinService} from "./shared/service/weixin.service";

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
    moduleId: module.id,
    selector: 'sd-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {

    loading: boolean = false;

    constructor(private weixinService: WeixinService, loadingService: LoadingService) {

        loadingService.loadingEvent.subscribe((loading: boolean) => {
            this.loading = loading;
        });

        weixinService.weixinShareInfoChangedEvent.subscribe((event: any) => this.weixinService.configShareInfo(event));

        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-bottom-center",
            "preventDuplicates": true,
            "onclick": null,
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }

        console.log('Environment config', environment);
    }
}
