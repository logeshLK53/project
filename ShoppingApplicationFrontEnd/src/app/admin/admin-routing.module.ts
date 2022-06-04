import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmorderComponent } from './components/confirmorder/confirmorder.component';
import { ProductsComponent } from './components/products/products.component';
import { SeeorderComponent } from './components/seeorder/seeorder.component';


const routes: Routes = [
  {path:'',component:AdminDashboardComponent,children:[
    {path:'products',component:ProductsComponent},
    {path:'cart',component:CartComponent},
     {path:'seeorder',component:SeeorderComponent},
      {path:'confirmorder',component:ConfirmorderComponent},
      { path: '', redirectTo: '/admin/products', pathMatch: 'full' },
  ]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
