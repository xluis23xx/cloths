import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileComponent } from './profile.component';

//modal
// import { UserComponent } from '../../modals/user/user.component'

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]
  // entryComponents:[
  //   UserComponent
  // ]
})  
export class ProfileComponentModule {}
