import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/cart.service';
import { IOrderStatus } from 'src/app/IOrderStatus';
import { OrderService } from '../../../order.service';


@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.css']
})
export class ConfirmorderComponent implements OnInit {

  constructor(private os: OrderService, private fb: FormBuilder , private cartService: CartService) { }

  public allOrder = [];
  public totalPrice=0;
  public address :any;
  public product :any;
  public orderResponse:any;
  ngOnInit() {
    this.os.getAddress(1)
    .subscribe(res=>{
      this.address = res;
    })
    this.cartService.getDataFromServer()
      .subscribe(res=>{
        console.log(res);
        this.allOrder=res;
        this.allOrder.forEach(element => {
        this.totalPrice += element.product.price;
      }
      )
    }
    )
  }

  placeOrder(){
    this.cartService.getDataFromServer()
      .subscribe(res=>{
        this.product=res;
        this.product.forEach(element => {
          let order={
            orderDate:Date.now,
            orderStatus:IOrderStatus.BOOKED,
            customerId:1,
            addressId:1,
            productId:element.product.productId
          }
      this.os.addOrderToServer(order).subscribe(
        (data1)=>{
          this.orderResponse=data1;
        }
      )
      }
      )
    }
      )
      alert("Order placed successfully");
  }

}
