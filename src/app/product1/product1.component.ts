import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
 productdetail!:FormGroup;
 categoryarr:string[]=[]
 productarr:string[]=[]
  constructor(private x:FormBuilder){

 }
  ngOnInit(): void {
    this.createproduct()
    this.categoryarr=Object.keys(this.productobj)
    this.productdetail.get('category')?.valueChanges.subscribe((el:any)=>{
      this.productarr=this.productobj[el]
    })
  }
 createproduct(){
  this.productdetail=this.x.group({
    'category':['',[Validators.required]],
    'productname':['',[Validators.required]],
    'quantity':['',[Validators.required]],
    'price':['',[Validators.required]],
    'totalprice':['',[Validators.required]]
  })
 }
productobj:any={
'Electronics':['Mobile','Laptop','Tv'],
'Books':['Gitanjali','Psychology'],
'sports':['cricket','hollyball','batmentan']
}
getdata(){
  let obj:any={
    'category':'Books',
    'productname':'Psychology',
    'quantity':2,
    'price':40,
    'totalprice':80
  }
  this.productdetail.patchValue(obj)
}
}
