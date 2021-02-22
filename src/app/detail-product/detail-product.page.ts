import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmCartComponent } from '../modals/confirm-cart/confirm-cart.component';
import { productI } from '../models/producto';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})


export class DetailProductPage implements OnInit {

  idProducto: BigInteger;

  public producto:productI;

  constructor(
    private _router:Router,
    private _activate:ActivatedRoute,
    public modalController: ModalController,
    private productS:ProductService
    ) { }

  ngOnInit() {
    this.getProduct();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ConfirmCartComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  onBack(){
    this._router.navigate(['/tabs/tab1']);
  }

  getProduct(){
    this.idProducto = this._activate.snapshot.params.id;

    this.productS.getDetailProduct(this.idProducto).subscribe(
      result => {
        if(result.status=="200"){
          this.producto = result.response[0];
          console.log(this.producto);
        }
      },
      error => {

      }
    )
  }
}
