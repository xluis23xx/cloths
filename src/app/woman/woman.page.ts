import { Component, OnInit } from '@angular/core';
import { ProductService } from  '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.page.html',
  styleUrls: ['./woman.page.scss'],
})
export class WomanPage implements OnInit {
  public products:any;
  
  constructor(
    private productS:ProductService,
    private _router:Router,
  ) { }

  ngOnInit() {
    this.getProducts();
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


}
