import {Directive, Input, SimpleChanges} from "@angular/core";
import {ElementRef, OnChanges} from "@angular/core";
import {BaseDatePipe} from "../pipe/date.pipe";
/**
 * Created by zhailiang on 16/10/21.
 *
 * 倒计时指令。
 *
 * 默认情况下，传入的时间如果离当前时间超过3天，则按照format显示日期，反之则显示倒计时
 *
 */

@Directive({selector: '[count-down]'})
export class CountDownDirective implements OnChanges {

    private timer:any;

    private maxTime: number = 0;

    //按照何种时间单位计算临界值,默认为'天'
    @Input() flagType: string = "day";

    //计算临界值的数值，默认为3.
    @Input() flagValue: number = 3;

    @Input() format: string = "yyyy-MM-dd";

    @Input() tip: string;

    @Input('count-down') date: Date;

    constructor(private el: ElementRef) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.date) {
            let datePipe: BaseDatePipe = new BaseDatePipe();
            let dateInfo:any = datePipe.parse(this.date);
            if (dateInfo[this.flagType] > this.flagValue) {
                this.el.nativeElement.innerHTML = datePipe.format(new Date(this.date), this.format);
            } else {
                this.maxTime = dateInfo.second;
                this.showTime();
            }
        }
    }

    showTime() {
        this.timer = setInterval(() => {
            if (this.maxTime >= 0) {
                let hour: any = Math.floor(this.maxTime / (60 * 60));
                let minutes: any = Math.floor((this.maxTime - hour * 60 * 60) / 60);
                let seconds: any = Math.floor(this.maxTime % 60);
                if ((minutes + "").length == 1) {
                    minutes = "0" + minutes;
                }
                if ((seconds + "").length == 1) {
                    seconds = "0" + seconds;
                }
                this.el.nativeElement.innerHTML = this.tip + hour + ":" + minutes + ":" + seconds;
                --this.maxTime;
            } else {
                clearInterval(this.timer);
            }
        }, 1000);
    }


}
