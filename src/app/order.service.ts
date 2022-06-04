import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress } from './IAddress';
import { ICustomer } from './ICustomer';
import { IOrder } from './IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private url1:string="http://localhost:5006/order/addOrder";
  private url2:string="http://localhost:5006/order/updateOrder/";
  private url3:string="http://localhost:5006/order/deleteOrder/";
  private url4:string="http://localhost:5006/order/getAllorder";
  private url5:string="http://localhost:5006/order/viewOrderByCustomerId/";
  private url6:string="http://localhost:5006/order/viewOrderByLocation/";
  private url7:string="http://localhost:5006/order/viewOrderByDate/";

  private url8:string="http://localhost:5002/address/updateAddress"
  
  private url9:string="http://localhost:5001/viewAllCustomer";

  private url10:string="http://localhost:5005/cart/"
  constructor(private http:HttpClient) {     
  }

    addOrderToServer(data:any):Observable<IOrder[]>{
      return this.http.post<IOrder[]>(this.url1,data);
    }

    updateOrderInServer(data:any):Observable<IOrder[]>{
      return this.http.put<IOrder[]>(this.url2,data);
    }

    deleteOrderById(id:any):Observable<IOrder[]>{
      return this.http.delete<IOrder[]>(this.url3+id);
    }

    getAllOrdersFromServer():Observable<IOrder[]>{
      return this.http.get<IOrder[]>(this.url4);
    }

    getOrdersByCustomerId(id:any):Observable<IOrder[]>{
      return this.http.get<IOrder[]>(this.url5+id);
    }
    getOrdersByLocation(loc:any):Observable<IOrder[]>{
      return this.http.get<IOrder[]>(this.url6+loc);
    }

    getOrdersByDate(date:any):Observable<IOrder[]>{
      return this.http.get<IOrder[]>(this.url7+date);
    }

    updateAddress(data:any):Observable<IAddress[]>{
      return this.http.put<IAddress[]>(this.url8,data);
    }

    getAllCustomer():Observable<ICustomer[]>{
      return this.http.get<ICustomer[]>(this.url9);
    }

    
}


