import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantAddComponent } from './restaurant-add/restaurant-add.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantUpdateComponent } from './restaurant-update/restaurant-update.component';

const routes: Routes = [
  {path:"add",component:RestaurantAddComponent},
  {path:"home",component:HomeComponent},
  {component:RestaurantUpdateComponent, path:"update/:id"},
  {component:RestaurantListComponent, path:"list"},
  {component:LoginComponent, path:"login"},
  {component:RegisterComponent, path:"register"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
