import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-secondform',
  templateUrl: './secondform.component.html',
  styleUrls: ['./secondform.component.css']
})
export class SecondformComponent implements OnInit{
  state:string[]=[]
  cities:string[]=[]
  constructor(private http:UsersService){

  }
  ngOnInit(): void {
   this.state=Object.keys(this.objstate)
  }
secondobj:secondclass=new secondclass()
 objstate:any={
  "Maharashtra":['mumbai','pune','nashik','sambhajiNagar'],
  "Delhi":['New Delhi','Nagarpur','Delhi'],
  "Mp":['bhopal','Indore']

}
getselect(){
 this.cities=this.objstate[this.secondobj.state]
 console.log(this.cities)
 
}
calculateAge(){
  if(this.secondobj.dob){
    var timeDiff = Math.abs(Date.now() - new Date(this.secondobj.dob).getTime())
    this.secondobj.age = Math.floor(timeDiff/(1000*3600*24)/365.25);
  }
}

information(el:any){
console.log(this.secondobj)
}
getData(){
  let obj:any={
    firstname:'Shweta',
    Lastname:'Magar',
    Mobile:8978909809,
   email:'shweta@gmail.com',
    password:'helloprasad',
    dob:"1998-11-04",
    state:'Maharashtra',
    city:'pune'
   }
  this.secondobj=obj
  this.getselect()
  this.calculateAge()
}

}
export class secondclass{
  firstname!:string;
  Lastname!:string;
  Mobile!:number;
  Age!:number
  email!:string;
  password!:string;
  state!:string;
  cities!:string;
  age!:number;
  dob!:string;
}