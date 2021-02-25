import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { productI } from '../../models/producto';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-confirm-cart',
  templateUrl: './confirm-cart.component.html',
  styleUrls: ['./confirm-cart.component.scss'],
})
export class ConfirmCartComponent implements OnInit {
  @Input() idProducto:BigInteger;
  @Input() codigo:string;
  @Input() nombre:string;
  @Input() stock:number;
  @Input() descripcion:string;
  @Input() imagen:string;
  @Input() estado:number;
  @Input() idCat:BigInteger;
  @Input() p_unitario:number;

  constructor(public modalController: ModalController,private _cartService:CartService) { }

  ngOnInit() {

  }

  // addProduct(){
  //   // localStorage.setItem('producto', JSON.stringify(producto));
  //   // console.log(producto);
  // }

  public addCart()
  {
    let producto:productI = {
      idProducto:this.idProducto,
      codigo:this.codigo,
      nombre:this.nombre,
      stock:this.stock,
      descripcion:this.descripcion,
      imagen:this.imagen,
      estado:this.estado,
      idCat:this.idProducto,
      p_unitario:this.p_unitario
    }

    // console.log(producto);
    this._cartService.changeCart(producto);
    
    this.closeModal();
  }


  closeModal(){
    this.modalController.dismiss();
  }

}
