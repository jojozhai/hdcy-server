import {Directive, ElementRef, HostListener} from "@angular/core";
import {TouchService, TouchSlideEvent, TouchSlideDirections} from "../service/touch.service";
/**
 * Created by zhailiang on 16/11/14.
 */
@Directive({selector: '[touch-listener]'})
export class TouchListenerDirective {

    constructor(private el: ElementRef, public touchService: TouchService) {
    }

    startY:number = 0;

    @HostListener("touchstart")
    onTouchstart() {
        let startEvent:TouchEvent = <TouchEvent>window.event;
        this.startY = startEvent.changedTouches[0].pageY;
    }

    @HostListener("touchmove")
    onTouchmove() {
        let moveEvent:TouchEvent = <TouchEvent>window.event;
        let currentY:number = moveEvent.changedTouches[0].pageY;
        let distanceY:number = currentY - this.startY;
        if(distanceY > 10 || distanceY < -10) {
            this.touchService.touchEvent.emit(new TouchSlideEvent(TouchSlideDirections.Vertical, distanceY));
        }
    }

}