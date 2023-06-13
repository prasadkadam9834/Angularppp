import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-allintwo',
  templateUrl: './allintwo.component.html',
  styleUrls: ['./allintwo.component.css']
})
export class AllintwoComponent implements OnInit {
  signup!:FormGroup
  states:string[]=[]
  cities:string[]=[]

  ngOnInit(): void {
  this.createform()
  this.states=Object.keys(this.stateobj)
  // this.getdata()
  this.signup.get('state')?.valueChanges.subscribe((el:any)=>{
    this.signup.get('city')?.updateValueAndValidity()
    this.cities=this.stateobj[el]
  })
  
  
}
createform(){
this.signup=new FormGroup({
'firstName':new FormControl('',[Validators.required]),
'Mobile':new FormControl('',[Validators.required]),
'state':new FormControl('',[]),
'city':new FormControl('',[]),
'EmailId':new FormControl('',[Validators.required]),
'password':new FormControl('',[Validators.required])

})
}
stateobj:any={
  'Maharashtra':['Mumbai','Pune','Nashik'],
  'Karnataka':['Mysore','Mandya','Bidar']
}
getcity(){
  this.cities=this.stateobj[this.signup.value.state]
  console.log(this.cities)
  
}
getdata(){
  let obj:any={
    firstName:'Sam',
    Mobile:7038509247,
    EmailId:'sam@gmail.com',
    password:'helloeveryone',
    state:'Karnataka',
    city:'Mandya'
  }
  this.signup.patchValue(obj)
 
 
  
}



get firstName(){
  return this.signup.controls['firstName']
}
get Mobile(){
  return this.signup.controls['Mobile']
}
get EmailId(){
  return this.signup.controls['EmailId']
}
get password(){
  return this.signup.controls['password']
}
get state(){
  return this.signup.controls['state']
}
get city(){
  return this.signup.controls['city']
}
submit(){
  console.log(this.signup.value)
 
}
}
