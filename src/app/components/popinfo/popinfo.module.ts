import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopinfoComponent } from './popinfo.component';


//modal
// import { UserComponent } from '../../modals/user/user.component'

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [PopinfoComponent],
  exports: [PopinfoComponent]
})  
export class PopinfoComponentModule {}
