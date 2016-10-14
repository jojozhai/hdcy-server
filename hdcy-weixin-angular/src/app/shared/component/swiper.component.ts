import {Input, Component, OnChanges} from "@angular/core";
import {Router} from "@angular/router";
import {SwiperService, OnImageRenderedEvent} from "../service/swiper.service";
/**
 * Created by zhailiang on 16/10/12.
 */

@Component({
  selector: 'swiper',
  templateUrl: "./swiper.component.html",
  styleUrls: ["./swiper.component.css"]
})
export class SwiperComponent implements OnChanges {

  ngOnChanges(): void {
    if(this.images){
      this.images.forEach(img => {
        this.swiperService.onImageRendered.emit(new OnImageRenderedEvent(this.target, img));
      })
    }
  }

  @Input() private images: Array<any> = [];

  @Input() private target: string = "";

  swiperOptions: any;


  constructor(private router: Router, private swiperService: SwiperService) {
    this.swiperOptions = {
      loop: false,
      autoplay: 3000,
      pagination: '.swiper-pagination',
      paginationClickable: true
    };
  }

  nav(image) {
    this.router.navigateByUrl("/" + this.target + "/" + image.id);
  }

}
