/**
 * Created by zhailiang on 16/9/24.
 */
import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class NavService {

    showNavEvent: EventEmitter<any> = new EventEmitter<any>();

    hideNavEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }


}
