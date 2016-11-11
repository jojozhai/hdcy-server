/**
 * Created by zhailiang on 16/10/18.
 */

export class DateInfo {

  constructor(public year: number,
              public month: number,
              public week: number,
              public day: number,
              public hour: number,
              public minute: number,
              public second: number) {

  }

}

export class BaseDatePipe {

  getMidNightDate(){
    let now:Date = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDay() - 1, 23, 59, 59)
  }

  parse2(date: Date, target:Date) {

    var value = target.getTime() - new Date(date).getTime();

    if (value < 0) {
      value = new Date(date).getTime() - target.getTime();
    }

    return this.parseValue(value);
  }

  parse(date: Date):DateInfo {
    var value = new Date().getTime() - new Date(date).getTime();

    if (value < 0) {
      value = new Date(date).getTime() - new Date().getTime();
    }
    return this.parseValue(value);
  }

  private parseValue(value:any):DateInfo {
    var secondMil = 1000;
    var minuteMil = secondMil * 60;
    var hourMil = minuteMil * 60;
    var dayMil = hourMil * 24;
    var weekMil = dayMil * 7;
    var monthMil = dayMil * 30;
    var yearMil = dayMil * 365;

    var year = Math.floor(value / yearMil);
    var month = Math.floor(value / monthMil);
    var week = Math.floor(value / weekMil);
    var day = Math.floor(value / dayMil);
    var hour = Math.floor(value / hourMil);
    var min = Math.floor(value / minuteMil);
    var s = Math.floor(value / secondMil);

    return new DateInfo(year, month, week, day, hour, min, s);
  }


  format(date: Date, fmt:any): string { //author: meizz
    var o:any = {
      "M+": date.getMonth() + 1,                 //月份
      "d+": date.getDate(),                    //日
      "h+": date.getHours(),                   //小时
      "m+": date.getMinutes(),                 //分
      "s+": date.getSeconds(),                 //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
}
