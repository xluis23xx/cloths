import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../components/popinfo/popinfo.component';

@Component({
  selector: 'app-man',
  templateUrl: './man.page.html',
  styleUrls: ['./man.page.scss'],
})
export class ManPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async showPop( event) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent, 
      event: event,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // const { data } = await popover.onDidDismiss(); 

    const { data } = await popover.onWillDismiss(); 

    console.log('Padre:', data );
  }
}
