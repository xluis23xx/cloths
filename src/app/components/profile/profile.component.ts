import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserComponent } from '../../modals/user/user.component'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async openModal(){
    const modal = await this.modalController.create({
      component: UserComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
