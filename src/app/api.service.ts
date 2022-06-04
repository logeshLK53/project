import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProducts } from './Products';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string="http://localhost:5003/product/products";
  constructor(private http :HttpClient) { }

  getDataFromServer():Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.url);
  }

  /*getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }*/
}
