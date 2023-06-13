import { Component } from '@angular/core';

@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.component.html',
  styleUrls: ['./firstform.component.css']
})
export class FirstformComponent {
  save(el:any){
  console.log(el.value)

  }
  
  
}
