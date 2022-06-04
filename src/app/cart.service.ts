import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url1:string="http://localhost:5005/cart/addToCart";
  private url2:string="http://localhost:5005/cart/allProducts";
  private url3:string="http://localhost:5005/cart/removeProductById/";
  private url4:string="http://localhost:5005/cart/removeAll";
  private url5:string="http://localhost:5005/cart/updateCart";

  public cartItemList: any=[]
  public cart: any;
  public productList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

 deleteAllDataFromServer(){
  this.http.delete(this.url4).subscribe(data => {
   console.log(data);
   return data;
 });
   }

   deleteDataByIdFromServer(id: number) {  
    let endPoints = id;
     this.http.delete(this.url3 + endPoints).subscribe(data => {
      console.log(data);
      return data;
    });
   }

  getDataFromServer():Observable<ICart[]>{
    return this.http.get<ICart[]>(this.url2);
  }

  addDataToServer(data: any):Observable<ICart>{
    console.log(data);
    return this.http.post<ICart>(this.url1,data);
  }

  updateDataToServer(id:number,data: any):Observable<ICart>{
    console.log(data);
    return this.http.put<ICart>(this.url5+"/"+id,data);
  }


getTotalPrice() : number{
  this.cartItemList = this.http.get<ICart[]>(this.url2);
  let grandTotal = 0;
  this.cartItemList.forEach(a => {
    grandTotal += (a.quantity);
    console.log(a.quantity);
  });
 
 
  return grandTotal;
}


increase(product : any){
  if(product.quantity < 5)
  {
    product.quantity +=1;
    product.total =product.quantity * product.price;
    this.getTotalPrice();
  }
}

decrease(product : any){
  if(product.quantity > 1)
  {
    product.quantity -=1;
    product.total =product.quantity * product.price;
    this.getTotalPrice();
  }
}
}
