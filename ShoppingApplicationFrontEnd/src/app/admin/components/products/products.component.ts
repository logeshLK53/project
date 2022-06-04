import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';
import { CartService } from '../../../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any;
 

  constructor(private api : ApiService,private cartService : CartService , private fb:FormBuilder) { }
  //  public cart =this.fb.group({
  //   cartId : [],
  //   customerId:[],
  //   productId:[],
  //   quantity:[]
  //  })
  ngOnInit() : void{
   /* this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity : 1,total : a.price});
      });
    })*/
    this.api.getDataFromServer()
    .subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity : 1,total : a.price});
      });
    })

  }

cartResponse : any;
  addtocart(id : any)
  {
    let cart={
      cartId:1,
      customerId:1,
      productId: id,
      quantity : 1
    }

    this.cartService.addDataToServer(cart).subscribe(
      (data)=>{
       this.cartResponse=data;
       console.log(data)
      }
    )
  }
  

}
