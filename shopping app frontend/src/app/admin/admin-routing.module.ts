import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { DeleteproductsComponent } from './components/deleteproducts/deleteproducts.component';
import { EditproductsComponent } from './components/editproducts/editproducts.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
    {path:'',component:AdminDashboardComponent,children:[
    //{path:'addproducts',component:AddproductsComponent},
    {path:'editproducts',component:EditproductsComponent},
    {path:'deleteproducts',component:DeleteproductsComponent},
    {path:'viewroducts',component:ViewproductsComponent},
    {path:'admin-dashboard',component:AdminDashboardComponent},   
    { path: '', redirectTo: '/admin/admin-dashboard', pathMatch: 'full' },
  ]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AddproductsComponent, DeleteproductsComponent, EditproductsComponent, ViewproductsComponent, AdminDashboardComponent]
})
export class AdminRoutingModule { }