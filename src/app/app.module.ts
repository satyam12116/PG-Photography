import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OurworkComponent } from './components/ourwork/ourwork.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BookComponent } from './components/book/book.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OurworkComponent,
    ContactusComponent,
    BookComponent,
    UserAuthComponent,
    AdminAuthComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    EditProfileComponent,
    EditDashboardComponent,
    RequestAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
