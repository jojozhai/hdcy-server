/**
 * Created by zhailiang on 16/11/14.
 */
import {Injectable, EventEmitter} from "@angular/core";

export const enum TouchSlideDirections {
    Horizontal,
    Vertical
}


export class TouchSlideEvent {

    constructor(public direction:TouchSlideDirections, public distance: number) {

    }

}

@Injectable()
export class TouchService {

    touchEvent: EventEmitter<TouchSlideEvent> = new EventEmitter<TouchSlideEvent>();

    constructor() { }

}