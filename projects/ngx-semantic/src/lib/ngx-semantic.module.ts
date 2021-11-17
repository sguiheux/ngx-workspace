import { NgModule } from '@angular/core';
import { SemanticAccordionComponent, SemanticAccordionItemComponent } from './accordion/accordion';
import { SemanticButtonComponent } from './button/button';
import { CommonModule } from '@angular/common';
import { SemanticCardComponent, SemanticCardsComponent } from './card/card';
import { SemanticContextMenuComponent } from './contextmenu/contextmenu';
import { SemanticDimmerComponent } from './dimmer/dimmer';
import { SemanticDropdownComponent } from './dropdown/dropdown';
import { SemanticFlagComponent } from './flag/flag';
import { SemanticCheckboxComponent, SemanticInputComponent, SemanticTextareaComponent } from './input/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SemanticItemComponent } from './item/item';
import { SemanticListComponent } from './list/list';
import { SemanticLoaderComponent } from './loader/loader';
import { SemanticMenuComponent } from './menu/menu';
import { SemanticMessageComponent } from './message/message';
import { SemanticModalComponent, SMModalTagsDirective } from './modal/modal';
import { SemanticPopupComponent } from './popup/popup';
import { SemanticSegmentComponent } from './segment/segment';
import { SemanticTransitionComponent } from './transition/transition';
import { SemanticShapeComponent } from './shape/shape';
import { SemanticSelectComponent } from './select/select';
import { SemanticSearchComponent } from './search/search';
import { SemanticSidebarComponent } from './sidebar/sidebar';
import { SemanticProgressComponent } from './progress/progress';
import { SMDeviceVisibilityDirective, SMVisibilityDirective } from './visibility/visibility';
import { SMTooltipDirective } from './popup/tooltip';
import { SemanticRatingComponent } from './rating/rating';
import { SemanticTabComponent, SemanticTabsComponent } from './tab/tab';

export let SEMANTIC_COMPONENTS: Array<any> = [
    SemanticCardComponent,
    SemanticCardsComponent,
    SemanticContextMenuComponent,
    SemanticInputComponent,
    SemanticTextareaComponent,
    SemanticCheckboxComponent,
    SemanticMenuComponent,
    SemanticMessageComponent,
    SemanticSegmentComponent,
    SemanticDimmerComponent,
    SemanticTransitionComponent,
    SemanticShapeComponent,
    SemanticPopupComponent,
    SemanticDropdownComponent,
    SemanticListComponent,
    SemanticSelectComponent,
    SemanticFlagComponent,
    SemanticSearchComponent,
    SemanticItemComponent,
    SemanticSidebarComponent,
    SemanticProgressComponent,
    SemanticModalComponent,
    SemanticTabsComponent,
    SemanticTabComponent,
    SemanticButtonComponent,
    SemanticLoaderComponent,
    SemanticAccordionComponent,
    SemanticAccordionItemComponent,
    SemanticRatingComponent
];

export let SEMANTIC_DIRECTIVES: Array<any> = [
    SMTooltipDirective,
    SMVisibilityDirective,
    SMDeviceVisibilityDirective,
    SMModalTagsDirective, // directives with no functionality, simply declare tags
];

@NgModule({
  declarations: [ SEMANTIC_DIRECTIVES, SEMANTIC_COMPONENTS ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
  exports: [ SEMANTIC_DIRECTIVES, SEMANTIC_COMPONENTS ],
})
export class NgxSemanticModule { }
