import { Component, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
declare const angular: any;
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'ng-dropdown-select',
  template: `
  <div class="btn-group">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
      Action <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li *ngFor="let item of items" (click)="itemClicked( item )">
        <a href="#">{{ item.name }}</a>
      </li>
    </ul>
  </div>
  `
})
export class NgDropdownSelectComponent implements OnChanges {
  @Input() items: Array<any>;
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    console.table(changes.items.currentValue);
  }

  private itemClicked( item: any ) {
    console.log( 'Inner click ', item );
    this.clicked.emit( item );
  }
}

angular.
  module('dropdownSelectModule').
  directive(
    'ngDropdownSelect',
    downgradeComponent({
      component: NgDropdownSelectComponent,
      inputs: ['items'],
      outputs: ['clicked']
    }) as angular.IDirectiveFactory
  );
