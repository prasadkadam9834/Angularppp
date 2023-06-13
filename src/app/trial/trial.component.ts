import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
 export class TrialComponent implements OnInit {
  ngOnInit(): void {
    this.category=Object.keys(this.dropdownobj)
  }
  category:string[]=[]
  productname:string[]=[]
trialobj:trial=new trial()
submit(el:any){
  console.log(this.trialobj)
}
ngchange(){
  this.productname=this.dropdownobj[this.trialobj.category]
  console.log(this.productname)
  
}
dropdownobj:any={
  'electronic':['Mobile','fridge'],
  'grocery':['rice',' sugar','tea'],
  'skincare':['shampo','soap']
}

information(){
let infoobj:any={
  'category':'electronic',
  'productName':'Mobile',
  'quantity':2,
  'price':2000,
  'totalprice':0,
  
 
  }
  
  this.trialobj=infoobj
  this.trialobj.totalprice=infoobj.price*infoobj.quantity
  this.ngchange()
 
}
calculation(){
  this.trialobj.totalprice=this.trialobj.quantity*this.trialobj.price
}

}

export class trial{
category!:string;
productName!:string;
quantity!:number;
price!:number;
totalprice!:number;


}