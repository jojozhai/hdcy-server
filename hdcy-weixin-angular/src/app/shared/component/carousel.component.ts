/**
 * Created by zhailiang on 16/10/8.
 */
import {Component, OnChanges, ViewContainerRef, Compiler, OnDestroy} from "@angular/core";
import {Input} from "@angular/core/src/metadata/directives";
import {ViewChild} from "@angular/core/src/metadata/di";
import {DynamicComponent} from "./dynamic.component";

@Component({
  selector: 'carousel',
  templateUrl: 'carousel.component.html'
})
export class CarouselComponent extends DynamicComponent implements OnChanges, OnDestroy {

  @ViewChild('dynamiccompile', {read: ViewContainerRef}) private container: ViewContainerRef;

  @Input() private images: Array<any>;

  @Input() private target: string = "";

  constructor(compiler: Compiler) {
    super(compiler);
  }

  protected isReady():boolean {
    return this.images != null && this.images.length > 0;
  }

  protected getContentHtml() {
    return this.getCarouselHtml();
  }

  protected targetDiv() {
    return this.container;
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
      result = result + `<div class="item ${active}"><a [routerLink]="['/${this.target}', ${image.id}]"><img class="slide-image" src="${image.image}" alt=""></a>${image.name}</div>`;
    })
    return result;
  }
}




