import {Input, Component} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by zhailiang on 16/10/12.
 */

@Component({
  selector: 'swiper',
  templateUrl: "./swiper.component.html",
  styleUrls: ["./swiper.component.css"]
})
export class SwiperComponent {

  @Input() private images: Array<any> = [];

  @Input() private target: string = "";

  swiperOptions: any;

  constructor(private router:Router) {
    this.swiperOptions = {
      loop: false,
//    autoplay: 3000,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      centeredSlides: true,
      slidesPerView: 1.2,      
      watchActiveIndex: true,
    };
  }

  nav(image) {
    this.router.navigateByUrl("/"+this.target+"/"+image.id);
  }

}
