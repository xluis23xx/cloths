import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {}

  goMan(){
    this._router.navigate(['/tabs/tab3/man']);		
  }

  goWoman(){
    this._router.navigate(['/tabs/tab3/woman']);
  }

  goChildren(){
    this._router.navigate(['/tabs/tab3/children']);
  }

  goBaby(){
    this._router.navigate(['/tabs/tab3/baby']);
  }
}
