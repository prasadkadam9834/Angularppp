import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product1Component } from './product1/product1.component';
import { TrialComponent, trial } from './trial/trial.component';
import { PageisComponent } from './pageis/pageis.component';

const routes: Routes = [
  {path:'product',component:Product1Component},
  {path:'trial',component:TrialComponent},
  {path:'',redirectTo:'/trial',pathMatch:'full'},
  {path:'**',component:PageisComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
