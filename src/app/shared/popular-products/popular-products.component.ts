import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-popular-products',
  templateUrl: 'popular-products.component.html',
  styleUrls: ['popular-products.component.scss']
})
export class PopularProductsComponent implements OnInit {

  @ViewChild('popularproducts') creativebanner: ElementRef;

  constructor() { }

  ngOnInit() {}
}
