import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges {
  @Input()data=''
  
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchange is working')
    console.log(changes)
    
  }

}
