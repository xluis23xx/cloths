import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface userI{
  id?:Number,
  name?:string,
  lastname?:string,
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public _http: HttpClient
  ) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  authUser(data: userI): Observable<any> {
    return this._http.post('http://proyectotais.test/api/usuario/login', JSON.stringify(data), { headers: this.headers });
  }

  createUser(data: userI): Observable<any> {
    return this._http.post('http://proyectotais.test/api/usuario/create', JSON.stringify(data), { headers: this.headers });
  }

}
