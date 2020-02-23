import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeroJobAdComponent } from "./hero-job-ad.component";
import { AdBannerComponent } from "./ad-banner.component";
import { TestComponent } from "./test.component";
import { AdDirective } from "./ad.directive";
// import { AdService }            from './ad.service';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    TestComponent,
    AdDirective
  ],
  entryComponents: [HeroJobAdComponent, TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
