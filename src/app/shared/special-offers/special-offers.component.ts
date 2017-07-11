import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-special-offers',
  templateUrl: 'special-offers.component.html',
  styleUrls: ['special-offers.component.scss']
})
export class SpecialOffersComponent implements OnInit {

  @ViewChild('specialoffers') creativebanner: ElementRef;

  constructor() { }

  ngOnInit() {}
}
