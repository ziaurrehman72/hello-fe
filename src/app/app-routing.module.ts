import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationCompComponent } from './registration-comp/registration-comp.component';
import { SearchDeleteCompComponent } from './search-delete-comp/search-delete-comp.component';

const routes: Routes = [
  {path:"", redirectTo:"register", pathMatch:"full"},
  {path:"search", component:SearchDeleteCompComponent},  
  {path:"register", component:RegistrationCompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
