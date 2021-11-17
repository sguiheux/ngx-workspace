import {
  Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef, OnInit, OnDestroy, Renderer2
} from '@angular/core';

declare var jQuery: any;

// because a of lot of shadow dom elements, we must create this fixSidebar
// function, to move elements to proper location before sidebar run.
jQuery.fn.fixSidebar = function() {
  const allModules = jQuery(this);

  allModules
    .each(function() {
        // tslint:disable-next-line:one-variable-per-declaration
      const
        selector = { pusher: '.pusher' },
        module = jQuery(this),
        context = jQuery('body');

      if (module.nextAll(selector.pusher).length === 0) {
        module.detach().prependTo(context);
      }
    });

  return this;
};

/**
 * Implementation of Sidebar module
 *
 * @link semantic-ui.com/modules/sidebar.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-sidebar',
  template: `<div class="ui sidebar {{class}}" #sidebar>
<ng-content></ng-content>
</div>`
})
export class SemanticSidebarComponent implements OnInit, OnDestroy {
  @Input() class: string;
  @ViewChild('sidebar', {static: false}) sidebar: ElementRef;

  constructor(public renderer: Renderer2) {
  }

  show(options?: {}) {
    jQuery(this.sidebar.nativeElement)
      .sidebar(options || {})
      .sidebar('toggle');
  }

  hide() {
    jQuery(this.sidebar.nativeElement)
      .sidebar('hide');
  }

  ngOnInit(): void {
    jQuery(this.sidebar.nativeElement)
      .fixSidebar();
  }

  ngOnDestroy(): void {
      const parent = this.renderer.parentNode(this.sidebar.nativeElement);
      this.renderer.removeChild(parent, this.sidebar.nativeElement);
  }
}
