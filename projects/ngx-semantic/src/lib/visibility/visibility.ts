import {
  Directive, ViewContainerRef, Input, OnInit, Output, EventEmitter
} from '@angular/core';

declare var jQuery: any;

/**
 * Implementation of Semantic UI Visibility
 *
 * @link http://semantic-ui.com/behaviors/visibility.html
 */
@Directive({
    // tslint:disable-next-line:directive-selector
  selector: '[smDirVisibility]'
})
export class SMVisibilityDirective implements OnInit {

  @Input() smDirVisibility: {};
    // tslint:disable-next-line:no-output-on-prefix
  @Output() onTopVisible: EventEmitter<{}> = new EventEmitter<{}>();
    // tslint:disable-next-line:no-output-on-prefix
  @Output() onTopPassed: EventEmitter<{}> = new EventEmitter<{}>();
    // tslint:disable-next-line:no-output-on-prefix
  @Output() onUpdate: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(public element: ViewContainerRef) {
  }

  ngOnInit(): void {

    if (this.element.element.nativeElement) {
      jQuery(this.element.element.nativeElement)
        .visibility({
          onTopPassed: (calculations: {}) => this.onTopPassed.emit(calculations),
          onTopVisible: (calculations: {}) => this.onTopVisible.emit(calculations),
          onUpdate: (calculations: {}) => this.onUpdate.emit(calculations),
        });
    }
  }
}

/**
 * Custom Implementation of Semantic UI Device Visibility
 *
 * @link http://semantic-ui.com/collections/grid.html#device-visibility
 */
@Directive({
    // tslint:disable-next-line:directive-selector
  selector: '[smDeviceVisibility]'
})
export class SMDeviceVisibilityDirective implements OnInit {

  @Input() smDeviceVisibility: string;

  constructor(public element: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.element.element.nativeElement.classList.add(...this.smDeviceVisibility.split(' '));
  }
}
