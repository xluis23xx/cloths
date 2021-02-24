import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-slide-popular',
  templateUrl: './slide-popular.component.html',
  styleUrls: ['./slide-popular.component.scss'],
})
export class SlidePopularComponent implements OnInit {
  public products:any;

  constructor(
    private _router:Router,
    private _productS:ProductService
    ) { }

  ngOnInit() {
    this.getProducts();
  }

  onDetail(id:Number){
    this._router.navigate(['/tabs/tab1/'+id]);		
  }

  getProducts(){
    this._productS.getProduct().subscribe(
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
