import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { agedefine } from '../crossfield';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  signupform!: FormGroup
  reactiveobj: reactive = new reactive()


  ngOnInit(): void {

    this.createform()
  }
  createform() {
    this.signupform = new FormGroup({
      "firstname": new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[A-Za-z]{3,6}")]),
      "Mobile": new FormControl('', [Validators.required, Validators.pattern("[0-9]{10,10}")]),
      "age": new FormControl('', [Validators.required,agedefine]),
      "gender": new FormControl('', []),
      "address": new FormGroup({
        "Line1": new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{4,10}')]),
        "Line2": new FormControl('', [Validators.required])
      })
    })
  }
  get firstname() {
    return this.signupform.controls['firstname']
  }
  get Mobile() {
    return this.signupform.controls['Mobile']
  }
  get age() {
    return this.signupform.controls['age']
  }
  get gender() {
    return this.signupform.controls['gender']
  }
  get Line1() {
    return this.signupform.get("address.Line1")
  }
  get Line2() {
    return this.signupform.get("address.Line2")
  }
  save() {
    console.log(this.signupform.value)
  }
  alldata() {
    let obj: any = {
      'Mobile': '9834334494',
      'firstname': 'prasad',
      'age': 25,
      'gender': 'male',
      'address': {
        'Line1': 'at post rametakli',
        'Line2': 'parbhani'
      }
    }
    this.signupform.patchValue(obj)
  }

}
class reactive {
  firstname!: string
}
