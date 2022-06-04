import { Component, OnInit } from '@angular/core';
import { ElementArrayFinder } from 'protractor';
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

  constructor(private cartService : CartService,private orderService : OrderService) { }

  ngOnInit() {

    this.cartService.getDataFromServer()
    .subscribe(res=>{
      console.log(res);
      this.products=res;
      this.products.forEach(element => {
        console.log((element.product.price * element.quantity))
        this.grandTotal += (element.product.price * element.quantity)
        console.log((this.grandTotal))
      });
    })

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
  this.cartService.updateDataToServer(id,cart).subscribe(
    (data)=>{
     this.cartResponse=data;
     console.log(data)
    }
  )
}
 decreasequantity(id:number,item : any){
   let cart={
    cartId:item.cartId,
    customerId:1,
    productId: item.product.productId,
    quantity : item.quantity-1
  }
  this.cartService.updateDataToServer(id,cart).subscribe(
    (data)=>{
     this.cartResponse=data;
     console.log(data)
    }
  )
}

}
