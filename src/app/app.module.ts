import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstformComponent } from './firstform/firstform.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MobilenumberDirective } from './directivelist/mobilenumber.directive';
import { SecondformComponent } from './secondform/secondform.component';
import { TrialComponent } from './trial/trial.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BuildformComponent } from './buildform/buildform.component';
import { CrossverifyComponent } from './crossverify/crossverify.component';
import { AllinoneComponent } from './allinone/allinone.component';
import { AllintwoComponent } from './allintwo/allintwo.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product1/product1.component';
import { PagenotComponent } from './pagenot/pagenot.component';
import { PageisComponent } from './pageis/pageis.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstformComponent,
    MobilenumberDirective,
    SecondformComponent,
    TrialComponent,
    ReactiveformComponent,
    BuildformComponent,
    CrossverifyComponent,
    AllinoneComponent,
    AllintwoComponent,
    LifecycleComponent,
    ProductComponent,
    Product1Component,
    PagenotComponent,
    PageisComponent,
    InputComponent,
    OutputComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
