import {Directive, Input} from "@angular/core/src/metadata/directives";
import {ElementRef, OnChanges} from "@angular/core";
import {DateInfo, BaseDatePipe} from "../shared/pipe/date.pipe";
/**
 * Created by zhailiang on 16/10/21.
 */

@Directive({selector: '[video-date]'})
export class VideoDateDirective implements OnChanges {

    private timer;

    private maxTime: number = 0;

    @Input('video-date') date: Date;

    constructor(private el: ElementRef) {
    }

    ngOnChanges(): void {
        if (this.date) {
            let datePipe: BaseDatePipe = new BaseDatePipe();
            let dateInfo: DateInfo = datePipe.parse(this.date);
            if (dateInfo.day > 3) {
                this.el.nativeElement.innerHTML = datePipe.format(new Date(this.date), 'yyyy-MM-dd');
            } else {
                this.maxTime = dateInfo.second;
                this.showTime();
            }
        }
    }

    showTime() {
        this.timer = setInterval(() => {
            if (this.maxTime >= 0) {
                let hour:any = Math.floor(this.maxTime/(60*60));
                let minutes:any = Math.floor((this.maxTime - hour*60*60)/60);
                let seconds:any = Math.floor(this.maxTime%60);
                if((minutes+"").length == 1){
                    minutes = "0"+minutes;
                }
                if((seconds+"").length == 1){
                    seconds = "0"+seconds;
                }
                this.el.nativeElement.innerHTML = "距直播开始还有:"+hour+":"+minutes+":"+seconds;
                --this.maxTime;
            }else{
                clearInterval(this.timer);
            }
        }, 1000);
    }


}