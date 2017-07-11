import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
declare var jQuery:any;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-hero-slider',
  templateUrl: 'hero-slider.component.html',
  styleUrls: ['hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit {

  @ViewChild('heroslider') heroslider: ElementRef;

  constructor() { }

  ngOnInit() {
    jQuery('#ensign-nivoslider').nivoSlider({
      effect: 'random',
      slices: 15,
      boxCols: 8,
      boxRows: 4,
      animSpeed: 500,
      pauseTime: 5000,
      startSlide: 0,
      directionNav: true,
      controlNavThumbs: true,
      pauseOnHover: true,
      manualAdvance: false
    });

    jQuery('#ensign-nivoslider-2').nivoSlider({
      effect: 'random',
      slices: 15,
      boxCols: 8,
      boxRows: 4,
      animSpeed: 500,
      pauseTime: 5000,
      startSlide: 0,
      directionNav: true,
      controlNavThumbs: true,
      pauseOnHover: true,
      manualAdvance: false
    });

    jQuery('#ensign-nivoslider-3').nivoSlider({
      effect: 'random',
      slices: 15,
      boxCols: 8,
      boxRows: 4,
      animSpeed: 500,
      pauseTime: 5000,
      startSlide: 0,
      directionNav: true,
      controlNavThumbs: false,
      pauseOnHover: true,
      manualAdvance: false
    });
  }
}
