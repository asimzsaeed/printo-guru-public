import {Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
let mainMenu  = require( '../../app.constants.json').main_menu;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
    main_menu:any;

    @ViewChild('header') header: ElementRef;
    constructor() {
        this.main_menu = mainMenu;
    }

    ngOnInit() {

    }
}
