import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordvalidator, verifyemail } from '../crossfield';

@Component({
  selector: 'app-crossverify',
  templateUrl: './crossverify.component.html',
  styleUrls: ['./crossverify.component.css']
})
export class CrossverifyComponent implements OnInit {
  signupform!:FormGroup
  constructor(private el:FormBuilder){

  }
  ngOnInit(): void {
    this.createform()
    // this.signupform.get('password')?.valueChanges.subscribe((el:any)=>{
    //   this.signupform.get('cpassword')?.updateValueAndValidity()
    // })
    this.signupform.get('Email')?.valueChanges.subscribe((el:any)=>{
      this.signupform.get('CEmail')?.updateValueAndValidity()
    })
  }
  createform(){
   this.signupform=this.el.group({
    // 'Email':['',[Validators.required]],
    'CEmail':['',[Validators.required,verifyemail]],
    // 'password':['',[Validators.required]],
    // 'cpassword':['',[Validators.required,passwordvalidator]]
   })
  }
  save(){
   console.log( this.signupform.value)
  }
  get Email(){
    return this.signupform.get('Email')
  }
  get CEmail(){
    return this.signupform.get('CEmail')
  }
  // get password(){
  //   return this.signupform.get('password')
  // }
  // get cpassword(){
  //   return this.signupform.get('cpassword')
  // }

}
