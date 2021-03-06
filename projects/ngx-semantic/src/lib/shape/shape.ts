import {
  Component, ChangeDetectionStrategy, ViewChild, ElementRef, Input, Output, EventEmitter,
  AfterViewInit
} from '@angular/core';

declare var jQuery: any;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-shape',
  template: `
    <div #shape class="ui shape {{class}}">
        <ng-content></ng-content>
    </div>
    `
})
export class SemanticShapeComponent implements AfterViewInit {
  @Input() class: string;
  @Input() options: {} = {};
  @Output() beforeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    // tslint:disable-next-line:no-output-on-prefix
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('shape', {static: false}) shape: ElementRef;

  ngAfterViewInit() {

    this.options = Object.assign({
      beforeChange: (): void => this.beforeChange.emit(true),
      onChange: (): void => this.onChange.emit(true)
    }, this.options);
  }

  /**
   * Show shape element
   *
   */
  show(...args: string[]) {


    jQuery(this.shape.nativeElement)
      .shape(this.options)
      .shape(args.join(','));
  }

}
