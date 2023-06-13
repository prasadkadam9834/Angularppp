import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMobilenumber]'
})
export class MobilenumberDirective {

  constructor(private el:ElementRef,private render:Renderer2) {
   
     }
     @HostListener('keypress',['$event'])
     Mobile(pl:any){
       if(pl.which <48||pl.which>58){
        pl.preventDefault()
       }
   }
  
  }

