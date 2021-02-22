import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    public _http: HttpClient
  ) { }

  getProduct(): Observable<any> {
    return this._http.get('http://proyectotais.test/api/producto');
  }

  getDetailProduct(id:BigInteger): Observable<any>{
    return this._http.get('http://proyectotais.test/api/producto/'+id);
  }
}
