import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidePopularComponent } from './slide-popular.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [SlidePopularComponent],
  exports: [SlidePopularComponent]
})
export class SlidePopularComponentModule {}
