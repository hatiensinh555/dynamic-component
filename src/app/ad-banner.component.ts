import { Component, OnInit, ViewChild, ComponentFactoryResolver } from "@angular/core";

import { AdDirective } from "./ad.directive";
import { TestComponent } from "./test.component";
import { HeroJobAdComponent } from "./hero-job-ad.component";
@Component({
  selector: "app-ad-banner",
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <button (click)="loadComponent('1')">Add</button>

      <button (click)="loadComponent('2')">loadComponent1()</button>
      <ng-template ad-host></ng-template>
    </div>
  `
})
export class AdBannerComponent implements OnInit {
  @ViewChild(AdDirective) adHost: AdDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() { }

  loadComponent(a) {
    let componentLoading;
    switch (a) {
      case '1':
        componentLoading = HeroJobAdComponent;
        break;
      case '2':
        componentLoading = TestComponent;
        break;
    }
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentLoading);
    this.adHost.viewContainerRef.clear();
    this.adHost.viewContainerRef.createComponent(componentFactory);
  }
}
