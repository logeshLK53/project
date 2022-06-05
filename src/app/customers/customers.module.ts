import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { SeeorderComponent } from './components/seeorder/seeorder.component';
import { ConfirmorderComponent } from './components/confirmorder/confirmorder.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomersDashboardComponent } from './components/customers-dashboard/customers-dashboard.component';



@NgModule({
  declarations: [
    CustomersDashboardComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent,
    SeeorderComponent,
    ConfirmorderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomersModule { }
