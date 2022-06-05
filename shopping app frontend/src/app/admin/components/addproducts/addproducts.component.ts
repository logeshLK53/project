import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor(private ps:ApiService,private fb:FormBuilder,private router:Router) { }
  simpleForm=this.fb.group({
    
    productName:[],
    price:[],
    color:[],
    dimensions:[],
    specification:[],
    manufacturer:[],
    quantity:[],
    categoryId:[]
  })
  public responce:any;
  ngOnInit(): void {
  }
  submit(){
    let product={
      productName:this.simpleForm.get("productName").value,
      price:this.simpleForm.get("price").value,
      color:this.simpleForm.get("color").value,
      dimensions:this.simpleForm.get("dimensions").value,
      specification:this.simpleForm.get("specification").value,
      manufacturer:this.simpleForm.get("manufacturer").value,
      quantity:this.simpleForm.get("quantity").value,
      categoryId:this.simpleForm.get("categoryId").value,

    }
    this.ps.addDataToServer(product).subscribe(
      data=>{
        this.responce=data;
        console.log(data);
        alert("Data Added Successfully")
        // this.router.navigate([""])
      }
    )
  }

}
