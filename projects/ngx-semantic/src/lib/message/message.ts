import {
  Component, Input, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef,
  Renderer2
} from '@angular/core';

/**
 * Implementation of Message collection
 *
 * @link http://semantic-ui.com/collections/message.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'sm-message',
  styles: [`sm-message { display: block; margin: 1em 0; } message-header {display: block}`],
  template: `<div class="ui message {{class}}" [ngClass]="{'icon': icon}" #message>
<i class="close icon" (click)="close()"></i>
<i *ngIf="icon" class="icon {{icon}}"></i>
  <div class="content">
    <div class="header">
      <ng-content select="message-header"></ng-content>
    </div>
    <ng-content select="message-content"></ng-content>
  </div>
</div>`
})
export class SemanticMessageComponent {
  @Input() icon: string;
  @Input() class: string;
  @ViewChild('message', {static: false}) message: ElementRef;

  constructor(public renderer: Renderer2) {
  }

  close() {
    const parent = this.renderer.parentNode(this.message.nativeElement);
    this.renderer.removeChild(parent, this.message.nativeElement);
  }
}
