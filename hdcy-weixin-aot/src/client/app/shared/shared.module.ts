import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ToolbarComponent} from './toolbar/index';
import {NavbarComponent} from './navbar/index';
import {NameListService} from './name-list/index';
import {InfiniteScrollDirective} from "./directive/infinite-scroll.directive";
import {CountDownDirective} from "./directive/count-down.directive";
import {SexPipe} from "./pipe/sex.pipe";
import {KSSwiperContainer, KSSwiperSlide} from "./directive/swiper.directive";

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent, NavbarComponent, InfiniteScrollDirective, CountDownDirective, KSSwiperContainer, KSSwiperSlide, SexPipe],
  exports: [ToolbarComponent, NavbarComponent, CommonModule, FormsModule, RouterModule, InfiniteScrollDirective, CountDownDirective, KSSwiperContainer, KSSwiperSlide, SexPipe],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
