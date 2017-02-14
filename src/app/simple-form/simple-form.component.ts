import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
    {{message}}
      <input #myInput type="text" [(ngModel)]="message"
         [ngClass]="{mousedown:isMousedown}"
         (mousedown)="isMousedown=true"
         (mouseup)="isMousedown=false"
         (mouseleave)="isMousedown=false">
            <button (click)="update.emit({text:message})">Click</button>
            <button (mouseover)="onClick($event, myInput.value)">Click</button>
    </div>
  `,
  styles: [
   `:host{
     font-weight:bold
   }
   .mousedown{
   border:2px solid red;
   }`
  ]
})
export class SimpleFormComponent implements OnInit {

  isMousedown;
  @Input() message;
  @Output() update = new EventEmitter();
  onClick(event,value){
   console.log(event);
   console.log("clicked " +value);
  }

  constructor() { 
   
  }

  ngOnInit() {
  }

}
