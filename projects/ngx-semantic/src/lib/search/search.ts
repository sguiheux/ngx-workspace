import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * <sm-search placeholder="Search..." (onSearch)="element.innerText = $event" ></sm-search>
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-search',
  template: `<div class="ui search" [ngClass]="{'loading': loading}">
 <div class="ui icon input {{class}} ">
  <input class="prompt" [formControl]="searchControl" type="text" [attr.placeholder]="placeholder">
  <i *ngIf="icon" class="search icon"></i>
  </div>
  <div class="results"></div>
</div>`
})
export class SemanticSearchComponent implements AfterViewInit {
  @Input() class: string;
  @Input() icon: boolean;
  @Input() loading: boolean;
  @Input() debounce = 0;
  @Input() placeholder: string;
    // tslint:disable-next-line:no-output-on-prefix
  @Output() onSearch: EventEmitter<string|number> = new EventEmitter<string|number>();
  searchControl: FormControl = new FormControl();

  ngAfterViewInit() {
    this.searchControl
      .valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(this.debounce)
      )
      .subscribe((data: string|number) => this.onSearch.emit(data));
  }
}
