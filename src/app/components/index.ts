import { PanelModule, InputTextModule, ButtonModule, TabViewModule, AutoCompleteModule } from 'primeng/primeng';
import {  } from '@angular/forms/forms';
import { RiddlesMosaicComponent } from './riddles-mosaic/riddles-mosaic.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { RiddleThumbnailComponent } from './riddle-thumbnail/riddle-thumbnail.component';
import { RiddleDetailsComponent } from './riddle-details/riddle-details.component';
import { RiddleSearchComponent } from './riddle-search/riddle-search.component';

export const COMPONENTS = [
  FooterComponent,
  RiddleDetailsComponent,
  RiddleThumbnailComponent,
  RiddleSearchComponent,
  RiddlesMosaicComponent
];

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    RouterModule,
    AutoCompleteModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
