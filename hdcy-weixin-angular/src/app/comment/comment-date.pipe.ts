/**
 * Created by zhailiang on 16/10/18.
 */
import {Pipe, PipeTransform} from "@angular/core";
import {BaseDatePipe, DateInfo} from "../shared/pipe/date.pipe";

@Pipe({
    name: 'commentDate'
})

export class CommentDatePipe extends BaseDatePipe implements PipeTransform {

    transform(date: any, args: any[]): any {

        let dateInfo: DateInfo = this.parse(date);

        let forActivity = false;
        if (args) {
            if (args[0] == 'a') {
                forActivity = true;
            }
        }

        if (forActivity) {
            return "haha";
        } else {
            if (dateInfo.minute == 0) {
                return "刚刚";
            } else if (dateInfo.hour == 0) {
                return dateInfo.minute + "分钟前";
            } else if (dateInfo.day == 0) {
                return dateInfo.hour + "小时前";
            } else if (dateInfo.month == 0) {
                return dateInfo.day + "天前";
            } else {
                return this.format(new Date(date), 'yyyy-MM-dd');
            }
        }

    }

}
