import { Component, OnInit, Directive, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}

@Directive({
  selector: 'app-modal-header, app-modal-body'
})
export class ModalDirectives {}
