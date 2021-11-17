import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * Implementation of Loader element
 *
 * @link http://semantic-ui.com/elements/loader.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-loader',
  template: `<div *ngIf="!complete" class="ui active dimmer {{class}}">
    <div [ngClass]="{text: text}" class="ui loader">{{text}}</div>
  </div>`
})
export class SemanticLoaderComponent {
    // tslint:disable-next-line:no-input-rename
  @Input('class') class: string;
    // tslint:disable-next-line:no-input-rename
  @Input('text') text: string;
    // tslint:disable-next-line:no-input-rename
  @Input('complete') complete = false;
}
