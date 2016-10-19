/**
 * Created by zhailiang on 16/10/18.
 */
import {Injectable, EventEmitter} from "@angular/core";

export class WeixinShareInfoChangedEvent {
  
  constructor(public title: string,
              public imgUrl?: string,
              public desc?: string,
              public link?: string) {

    if (!desc) {
      this.desc = title;
    }

  }
}

@Injectable()
export class WeixinService {

  weixinShareInfoChangedEvent: EventEmitter<WeixinShareInfoChangedEvent> = new EventEmitter<WeixinShareInfoChangedEvent>();

  constructor() {
  }

}
