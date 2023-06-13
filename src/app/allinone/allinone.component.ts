import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-allinone',
  templateUrl: './allinone.component.html',
  styleUrls: ['./allinone.component.css']
})
export class AllinoneComponent implements OnInit {
  ngOnInit(): void {
    this.states=Object.keys(this.stateobj)
  }
  states:string[]=[]
  cities:string[]=[]

  templateobj:template=new template()
  calculateAge(){
    if(this.templateobj.Dob){
      var timeDiff = Math.abs(Date.now() - new Date(this.templateobj.Dob).getTime())
      this.templateobj.Age = Math.floor(timeDiff/(1000*3600*24)/365.25);
    }
  }
  stateobj:any={
    'Maharashtra':['Mumbai','Pune','Nashik'],
    'Delhi':['New Delhi','Sauth','East','North'],
    'Karnataka':['Mysore','Mandya','Bidar']
  }
  save() {
    console.log(this.templateobj)
  }
  getcities(){
    this.cities=this.stateobj[this.templateobj.state]
  }
  getdata(){
    let obj:any={
      firstname:'prasad',
      Mobile:9834334494,
      Dob:'1998-11-04',
      // 'Age':25,
      EmailId:'prasad@gmail.com',
      password:'prasadkadam',
      state:'Maharashtra',
      city:'Pune'
    }
    this.templateobj=obj
    this.calculateAge()
    this.getcities()
  }
}
export class template{
  firstname!:string;
  Mobile!:number;
  Age!:number;
  EmailId!:string;
  password!:string;
  Dob!:string;
  state!:string;
  city!:string;
}