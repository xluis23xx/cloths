import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomanPageRoutingModule } from './woman-routing.module';

import { WomanPage } from './woman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomanPageRoutingModule
  ],
  declarations: [WomanPage]
})
export class WomanPageModule {}
