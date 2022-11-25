import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { ResturantsComponent } from './resturants/resturants.component';
import { OrderfoodComponent } from './orderfood/orderfood.component';
import { RouterModule, Routes } from '@angular/router';

const myrouter:Routes=[{
  path:"",
  component:HomePageComponent
},
{
  path:"food",
  component:OrderfoodComponent
},
{
  path:"restaurants",
  component:ResturantsComponent
},
{
  path:"login",
  component:UserloginComponent
},
{
  path:"register",
  component:UserregisterComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    UserloginComponent,
    UserregisterComponent,
    ResturantsComponent,
    OrderfoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myrouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
