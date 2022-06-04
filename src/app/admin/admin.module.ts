import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { SeeorderComponent } from './components/seeorder/seeorder.component';
import { ConfirmorderComponent } from './components/confirmorder/confirmorder.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent,
    SeeorderComponent,
    ConfirmorderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
