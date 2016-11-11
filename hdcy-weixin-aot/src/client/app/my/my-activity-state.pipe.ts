/**
 * Created by zhailiang on 16/10/24.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myActivityState'
})

export class MyActivityStatePipe implements PipeTransform {

    transform(value: any, args?: any[]): any {

        if(value == "NOT_START") {
            return "未开始";
        }else if(value == "ONGOING") {
            return "进行中";
        }else if(value == "FINISH") {
            return "已结束";
        }
        return "未知状态"

    }
}