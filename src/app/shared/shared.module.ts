import { NgModule } from '@angular/core';

import { ModalComponent, ModalDirectives } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { NotesComponent } from './notes/notes.component';
import { HeaderComponent } from './header/header.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';
import { CreativeBannerComponent } from './creative-banner/creative-banner.component';
import { FooterStaticContainerComponent } from './footer-static-container/footer-static-container.component';
import { MaFooterContainerComponent } from './ma-footer-container/ma-footer-container.component';

@NgModule({
  declarations: [
    ModalComponent,
    TopNavigationComponent,
    SubNavigationComponent,
    ModalDirectives,
    NotesComponent,
    HeaderComponent,
    HeroSliderComponent,
    PopularProductsComponent,
    SpecialOffersComponent,
    CreativeBannerComponent,
    FooterStaticContainerComponent,
    MaFooterContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ModalComponent,
    ModalDirectives,
    TopNavigationComponent,
    SubNavigationComponent,
    NotesComponent,
    HeaderComponent,
    HeroSliderComponent,
    PopularProductsComponent,
    SpecialOffersComponent,
    CreativeBannerComponent,
    FooterStaticContainerComponent,
    MaFooterContainerComponent
  ]
})
export class SharedModule {}
