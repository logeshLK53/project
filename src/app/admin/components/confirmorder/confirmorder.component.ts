import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../../order.service';


@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.css']
})
export class ConfirmorderComponent implements OnInit {

  constructor(private os: OrderService, private fb: FormBuilder) { }

  public allOrder = [];
  ngOnInit() {
    this.os.getOrdersByCustomerId(1)
      .subscribe(
        (data) => {
          this.allOrder = data;
          console.log(data);
        }
      )
    this.newAddress()
  }

  public totalPrice = 0;
  total() {
    for (let i = 0; i < this.allOrder.length; i++) {
      this.totalPrice = this.totalPrice + this.allOrder[i].product.price;
    }
  }
  public uniAddress = []
  newArray() {
    for (let i = 0; i < this.allOrder.length; i++) {
      this.uniAddress[i] = this.allOrder[i].address;
    }
  

    var clean = this.uniAddress.filter((uniAddress, index, self) =>
      index === self.findIndex((t) => (t.streetNo === uniAddress.streetNo && t.buildingName === uniAddress.buildingName)))
    this.uniAddress=clean;
    console.log("this is clean");
    console.log(clean);
    console.log("this is uni");
    console.log(this.uniAddress);
  }


  addressForm = this.fb.group({
    addressId: [''],
    streetNo: [''],
    buildingName: [''],
    city: [''],
    state: [''],
    country: [''],
    pincode: ['']
  })

  public newAddress;

  save() {
    let address = {
      addressId: this.addressForm.get('addressId').value,
      streetNo: this.addressForm.get('streetNo').value,
      buildingName: this.addressForm.get('buildingName').value,
      city: this.addressForm.get('city').value,
      state: this.addressForm.get('state').value,
      country: this.addressForm.get('country').value,
      pincode: this.addressForm.get('pincode').value

    }
    this.total()
    this.os.updateAddress(address).subscribe(
      (data) => {
        this.newAddress = data;
        console.log(data);
      }
    )
  }
  public products = [1, 2];

  payment() {
    alert("Order placed successfully");
  }

}
