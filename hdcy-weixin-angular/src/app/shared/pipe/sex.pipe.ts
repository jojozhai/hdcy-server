/**
 * Created by zhailiang on 16/10/26.
 */
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'sex'
})

export class SexPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    if (value == '1') {
      return '男'
    } else if (value == '2') {
      return '女'
    }
    return '未知'
  }
}
