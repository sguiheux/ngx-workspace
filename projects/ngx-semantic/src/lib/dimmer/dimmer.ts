import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-dimmer',
  template: `<div class="ui page dimmer" #dimmer>
  <div class="content">
    <ng-content></ng-content>
  </div>
</div>`
})
export class SemanticDimmerComponent {
  @ViewChild('dimmer', {static: false}) dimmer: ElementRef;

  /**
   * Show dimmer element
   */
  show(options?: {}) {
    jQuery(this.dimmer.nativeElement)
      .dimmer(options || {})
      .dimmer('toggle');
  }
}
