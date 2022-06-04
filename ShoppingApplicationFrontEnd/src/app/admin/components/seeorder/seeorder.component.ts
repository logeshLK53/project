import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seeorder',
  templateUrl: './seeorder.component.html',
  styleUrls: ['./seeorder.component.css']
})
export class SeeorderComponent implements OnInit {
 

  constructor(private os:OrderService,private router: Router) { }

  public allOrder=[];
  public allCustomer=[];
  ngOnInit() {
    this.os.getOrdersByCustomerId(1)
    .subscribe(
      (data)=>{
        this.allOrder=data;
        console.log(data);
      }
    )
    this.os.getAllCustomer()
    .subscribe(
      (data1)=>{
        this.allCustomer=data1;
        console.log(data1);
      }
    )

  }


}