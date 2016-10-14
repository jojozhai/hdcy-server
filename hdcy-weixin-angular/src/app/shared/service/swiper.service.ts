/**
 * Created by zhailiang on 16/10/13.
 */
import {Injectable, EventEmitter} from "@angular/core";

export class OnImageRenderedEvent {

  constructor(public type:string, public image:any){

  }
}

@Injectable()
export class SwiperService {

  onImageRendered: EventEmitter<OnImageRenderedEvent> = new EventEmitter<OnImageRenderedEvent>();

  constructor() {
  }

}
