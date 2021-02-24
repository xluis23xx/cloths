import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProductPageRoutingModule } from './detail-product-routing.module';

import { DetailProductPage } from './detail-product.page';

import { ConfirmCartComponentModule } from '../modals/confirm-cart/confirm-cart.module'

@NgModule({
  entryComponents: [
    ConfirmCartComponentModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProductPageRoutingModule,
    ConfirmCartComponentModule
  ],
  declarations: [DetailProductPage]
})
export class DetailProductPageModule {}
