/**
 * Created by zhailiang on 16/10/8.
 */
import {Component, OnInit, OnChanges} from '@angular/core';
import {SafeHtml, DomSanitizer} from "@angular/platform-browser";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'carousel',
  templateUrl: 'carousel.component.html'
})
export class CarouselComponent implements OnInit, OnChanges {

  ngOnChanges(): void {
    if (this.images) {
      this.carouselHtml = this.sanitizer.bypassSecurityTrustHtml(this.getCarouselHtml());
    }
  }

  carouselHtml: SafeHtml;

  @Input() images: Array<any>;

  @Input() target:string = "";

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  private getCarouselHtml() {
    return `
<div class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    ${this.getCarouselIndicators()}
  </ol>
  <div class="carousel-inner">
    ${this.getCarouselInner()}
  </div>
  <a class="left carousel-control" href="javascript:$('.carousel').carousel('prev');">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="javascript:$('.carousel').carousel('next');">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>`
  }

  private getCarouselIndicators() {
    let result: string = "";
    this.images.forEach((value, index) => {
      if (index == 0) {
        result = result + `<li class="active"></li>`;
      } else {
        result = result + "<li></li>";
      }
    })
    return result;
  }

  private getCarouselInner() {
    let result: string = "";
    this.images.forEach((image, index) => {
      let active = "";
      if (index == 0) {
        active = "active";
      }
      result = result + `<div class="item ${active}"><a (click)="alert(1)"><img class="slide-image" src="${image.image}" alt=""></a>${image.name}</div>`;
    })
    return result;
  }
}




