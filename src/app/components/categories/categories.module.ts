import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [CategoriesComponent],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {}
