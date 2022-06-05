import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
//import { NotFoundComponent } from './components/not-found/not-found.component';
//import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
 // {path:'forgot-password',component:ForgotPasswordComponent},
  //{path :'register',component:RegisterComponent},
  //{path:'', redirectTo:'login',pathMatch:'full'},
  {
    path: 'admin',
   canActivate:[AuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin/admin.module').then((m) => m.AdminModule),
  // }
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
