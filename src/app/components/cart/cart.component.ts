import { Component, OnInit } from '@angular/core';
import { productI } from '../../models/producto';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  // public products=[];
  public items: Array<productI>
  public totalPrice:number = 0;
  public totalQuantity:number = 0;
  // public productosArray:Array<any>;

  constructor(private _cartService:CartService) { }

  ngOnInit() {
    // let product = JSON.parse(localStorage.getItem('producto'));
    // this.products.push(product); 
    // console.log("Carrito",this.products); 

    this._cartService.currentDataCart$.subscribe(x=>{
      if(x)
      {
        this.items = x;
        this.totalQuantity = x.length;
        this.totalPrice = x.reduce((sum, current) => sum + (current.p_unitario * 1), 0);
      }
    })
 
  }

  public remove(producto:productI)
  {
    this._cartService.removeElementCart(producto);
  }


}
