import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserComponent } from '../../modals/user/user.component';
import { userI } from '../../models/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public user:userI;

  constructor(public modalController: ModalController) { 
    this.user = JSON.parse(localStorage.getItem('user'))
  }

  ngOnInit() {}

  async openModal(){
    const modal = await this.modalController.create({
      component: UserComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'id': this.user.id,
        'name': this.user.name,
        'lastname': this.user.lastname,
        'email': this.user.email
      }
    });
    return await modal.present();
  }

}
