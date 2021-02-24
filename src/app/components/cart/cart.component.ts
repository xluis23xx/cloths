import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products=[];
  public productosArray:Array<any>;

  constructor() { }

  ngOnInit() {
    let product = JSON.parse(localStorage.getItem('producto'));
    this.products.push(product); 
    // console.log(this.products); 

    for (let index = 0; index < this.products.length; index++) {
      this.productosArray = this.products[index];
    }
    // console.log(this.productosArray);
 
  }

}
