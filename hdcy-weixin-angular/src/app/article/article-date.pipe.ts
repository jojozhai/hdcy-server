/**
 * Created by zhailiang on 16/10/18.
 */
import {Pipe, PipeTransform} from "@angular/core";
import {BaseDatePipe, DateInfo} from "../shared/pipe/date.pipe";

@Pipe({
  name: 'articleDate'
})

export class ArticleDatePipe extends BaseDatePipe implements PipeTransform {

  transform(date: any, args: any[]): any {

    let dateInfo:DateInfo = this.parse(date);

    if(dateInfo.day == 0) {
      return "今天"
    }else if(dateInfo.day == 1) {
      return "昨天"
    }else if(dateInfo.day == 2) {
      return "前天"
    }else{
      if(date == null) {
        return "";
      }else{
        return this.format(new Date(date), 'yyyy-MM-dd');
      }
    }
  }
}
