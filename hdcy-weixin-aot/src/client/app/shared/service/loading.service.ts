/**
 * Created by zhailiang on 16/10/20.
 */
import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class LoadingService {

  loadingEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

}
