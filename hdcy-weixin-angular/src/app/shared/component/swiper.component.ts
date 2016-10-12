/**
 * Created by zhailiang on 16/10/12.
 */
import {Component, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'swiper',
  templateUrl: './swiper.component.html'
})
export class SwiperComponent implements OnInit {

  constructor(el: ElementRef) {
    $(el).append("<div>1</div>");

  }

  ngOnInit() {
  }

}
