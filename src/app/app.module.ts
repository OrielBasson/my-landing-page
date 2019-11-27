import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AlertModule } from "ngx-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxUsefulSwiperModule } from "ngx-useful-swiper";
import { NgxLazyElModule } from "@juristr/ngx-lazy-el";
import { ScrollEventModule } from "ngx-scroll-event";

import { AppRoutingModule } from "./app-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MainComponent } from "./main/main.component";
import { RouterModule } from "@angular/router";
import { HomeSectionComponent } from "./main/home-section/home-section.component";
import { AboutSectionComponent } from "./main/about-section/about-section.component";

const lazyConfig = [
  {
    selector: "dynamic-element-lazy-navbar",
    loadChildren: () => import("./lazy/lazy.module").then(m => m.LazyModule)
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    MainComponent,
    HomeSectionComponent,
    AboutSectionComponent
  ],
  imports: [
    ScrollEventModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AlertModule.forRoot(),
    NgxUsefulSwiperModule,
    NgxLazyElModule.forRoot(lazyConfig),
    RouterModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
