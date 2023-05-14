import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OurworkComponent } from './components/ourwork/ourwork.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BookComponent } from './components/book/book.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RequestAccessComponent } from './request-access/request-access.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'ourwork',component:OurworkComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'book',component:BookComponent},
  {path:'user-auth',component:UserAuthComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'admin-auth',component:AdminAuthComponent},
  {path:'req',component:RequestAccessComponent},
  {path:'editprofile',component:EditDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
