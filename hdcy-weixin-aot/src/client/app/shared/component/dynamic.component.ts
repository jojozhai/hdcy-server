import {ViewContainerRef, ComponentRef, OnDestroy, OnChanges, ComponentFactory, Compiler} from "@angular/core";
import {ViewChild} from "@angular/core/src/metadata/di";
import {Component} from "@angular/core/src/metadata/directives";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core/src/metadata/ng_module";
/**
 * Created by zhailiang on 16/10/10.
 */
export abstract class DynamicComponent implements OnChanges, OnDestroy {

  private cmpRef: ComponentRef<any>;

  constructor(private compiler: Compiler){

  }

  ngOnDestroy(): void {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  ngOnChanges(): void {
    if(this.isReady()){
      if (this.cmpRef) {
        this.cmpRef.destroy();
      }
      this.compileToComponent(this.getContentHtml()).then((factory: ComponentFactory<any>) => {
        this.cmpRef = this.targetDiv().createComponent(factory)
      })
    }
  }

  private compileToComponent(template1: string): Promise<ComponentFactory<any>> {
    @Component({
      template: template1,
    })
    class DynamicComponent {
    }
    @NgModule({
      imports: [BrowserModule, RouterModule],
      declarations: [DynamicComponent]
    })
    class DynamicModule {
    }
    return this.compiler.compileModuleAndAllComponentsAsync(DynamicModule).then(
      factory => factory.componentFactories.find(x => x.componentType === DynamicComponent)
    )
  }


  protected abstract getContentHtml():any;

  protected abstract isReady():any;

  protected abstract targetDiv():any;
}
