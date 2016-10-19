/**
 * Created by zhailiang on 16/10/18.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'activityDate'
})

export class ActivityDatePipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    console.log(value);
  }
}
