import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buildform',
  templateUrl: './buildform.component.html',
  styleUrls: ['./buildform.component.css']
})
export class BuildformComponent implements OnInit {
  signup!: FormGroup
  states:string[]=[]
  cities:string[]=[]
  constructor(private re: FormBuilder) {

  }
  ngOnInit(): void {
    this.createform()
    this.states=Object.keys(this.stateobj)
    this.getdata()
    
    
  }
  createform() {
    this.signup = this.re.group({
      'firstname': ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]{3,10}')]],
      'Mobile': ['', [Validators.required, Validators.pattern("[0-9]{10,10}")]],
      'Age': ['', [Validators.required]],
      'address': this.re.group({
        'Line1': ['', [Validators.required]],
        "Line2": ['', [Validators.required]],
        "state":['',[]],
        "city":['',[]]
      })

    })
  }
  stateobj:any={
    'Maharashtra':['mumbai','pune','nashik'],
    'Karnataka':['Mysore','Mandya','Bidar']

  }
  getcitiy(){
    this.cities=this.stateobj[this.signup.value.address.state]
  }
  save() {
    console.log(this.signup.value)
  }
  get firstname() {
    return this.signup.get('firstname')
  }
  get Mobile() {
    return this.signup.get('Mobile')
  }
  get Age() {
    return this.signup.get('Age')
  }
  get Line1() {
    return this.signup.get('Line1')
  }
  get Line2() {
    return this.signup.get('Line2')
  }
  get state(){
    return this.signup.get('state')
  }
  get city(){
    return this.signup.get('city')
  }
  getdata() {
    let obj = {
      'firstname': 'prasad',
      'Mobile': 'vivo',
      'Age': 25,
      'address': {
        'Line1': 'parbhani',
        'Line2': 'manwath',
         'state':'Karnataka',
         'city':'Bidar'
      }
    }
    this.signup.patchValue(obj)
    this.stateobj
    this.getcitiy()
  }
  reset() {
    this.signup.reset()
  }

}
