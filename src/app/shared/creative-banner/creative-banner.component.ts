import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-creative-banner',
  templateUrl: 'creative-banner.component.html',
  styleUrls: ['creative-banner.component.scss']
})
export class CreativeBannerComponent implements OnInit {

  @ViewChild('creativebanner') creativebanner: ElementRef;

  constructor() { }

  ngOnInit() {}
}
