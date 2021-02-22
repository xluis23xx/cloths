import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmCartComponent } from './confirm-cart.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ConfirmCartComponent],
  exports: [ConfirmCartComponent]
})
export class ConfirmCartComponentModule {}
