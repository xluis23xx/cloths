import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserComponent } from './user.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserComponentModule {}
