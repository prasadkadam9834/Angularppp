import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  parentdata='these is chiddata'
@Input()employee=''
@Output()eventname:EventEmitter<string>=new EventEmitter()
method(){
  this.eventname.emit(this.parentdata)
}
}
