import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../components/popinfo/popinfo.component';
import { ProductService } from  '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-man',
  templateUrl: './man.page.html',
  styleUrls: ['./man.page.scss'],
})
export class ManPage implements OnInit {
  public products:any;

  constructor(
    private popoverCtrl: PopoverController,
    private productS:ProductService,
    private _router:Router
    ) { }

  ngOnInit() {
    this.getProducts();
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

  getProducts(){
    this.productS.getProduct().subscribe(
      result => {
        if(result.status=="200"){
          this.products = result.response;
          console.log(this.products);
        }
      },
      error => {

      }
    )
  } 

  onDetail(id:Number){
    this._router.navigate(['/tabs/tab1/'+id]);		
  }
}
