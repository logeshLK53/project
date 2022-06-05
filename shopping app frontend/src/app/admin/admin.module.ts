import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { DeleteproductsComponent } from './components/deleteproducts/deleteproducts.component';
import { EditproductsComponent } from './components/editproducts/editproducts.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddproductsComponent,
    DeleteproductsComponent,
    EditproductsComponent,
    ViewproductsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
