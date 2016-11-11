/**
 * Created by zhailiang on 16/10/8.
 */
import {Injectable} from "@angular/core";
import {HttpRestService} from "../shared/service/http-rest.service";
import {Http} from "@angular/http";

@Injectable()
export class ActivityService extends HttpRestService {

    constructor(http: Http) {
        super(http, "activity");
    }

    sign(param: any) {

        this.http.post(this.getReqUrl("activityParticipator"), param, this.getBasicHeader()).subscribe(() => {
            toastr.success("报名成功");
            window.history.back();
        }, err => this.handleException(err));

    }

    isSigned(id: number) {
        return this.http.get(this.getReqUrl("participator/member?participationId=" + id), this.getBasicHeader());
    }
}
