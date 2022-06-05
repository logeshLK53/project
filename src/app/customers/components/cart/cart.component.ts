import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ElementArrayFinder } from 'protractor';
import { IOrderStatus } from 'src/app/IOrderStatus';
import { CartService } from '../../../cart.service';
import { HeaderService } from '../../../header.service';
import { OrderService } from '../../../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products : any=[];
public grandTotal : number=0;
public allOrder = [];
public Oid:number =0;
  orderResponse: any;
  constructor(private cartService : CartService,private orderService : OrderService,private router : Router) { }

  ngOnInit() {
    setInterval(()=>{
      this.cartService.getDataFromServer()
      .subscribe(res=>{
        //console.log(res);
        this.products=res;
        this.grandTotal=0;
        this.products.forEach(element => {
          //console.log((element.product.price * element.quantity))
          this.grandTotal += (element.product.price * element.quantity)
         // console.log((this.grandTotal))
      });
      })
    },400)
  }
  placeOrder(){
    this.cartService.getDataFromServer()
      .subscribe(res=>{
        this.products=res;
        this.products.forEach(element => {
          let order={
            orderDate:Date.now,
            orderStatus:IOrderStatus.BOOKED,
            customerId:1,
            addressId:1,
            productId:element.product.productId
          }
      this.orderService.addOrderToServer(order).subscribe(
        (data1)=>{
          this.orderResponse=data1;
          console.log(data1);
        }
      )
      }
      )
    }
    )
    this.router.navigate(['/seeorder']);
  }

  removeItem(item : number)
  {
    //this.cartService.removeCartItem(item);
    this.cartService.deleteDataByIdFromServer(item);
    this.grandTotal = this.cartService.getTotalPrice();
  }


removeall(){
  //this.cartService.removeAllCart();
  this.cartService.deleteAllDataFromServer();
  this.grandTotal = this.cartService.getTotalPrice();
}
cartResponse : any;
increasequantity(id :number,item : any){
  let cart={
    cartId:item.cartId,
    customerId:1,
    productId: item.product.productId,
    quantity : item.quantity+1
  }
  if(cart.quantity<=5){
  this.cartService.updateDataToServer(id,cart).subscribe(
    (data)=>{
     this.cartResponse=data;
     console.log(data)
    }
  )
}
else
{
  alert("We are very sorry only 5 units allowed in each unit")
}
}
 decreasequantity(id:number,item : any){
   let cart={
    cartId:item.cartId,
    customerId:1,
    productId: item.product.productId,
    quantity : item.quantity-1
  }
  if(cart.quantity>0)
  {
  this.cartService.updateDataToServer(id,cart).subscribe(
    (data)=>{
     this.cartResponse=data;
     console.log(data)
    }
  )
 }
 else
 {
   alert("we are very sorry unit value should be greater than 0");
 }
 }
}
