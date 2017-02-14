import { Component, Inject } from '@angular/core';
import { FriendComponent } from 'app/friend.component';

@Component({
  selector: 'app-root',
  template: `<div>
     
     <ul>
       <li *ngFor="let message of mail.messages">
       {{message.text}}
       </li>
     </ul>
      <app-simple-form *ngFor="let message of mail.messages"
       [message] = "message.text"
       (update)=onUpdate(message.id,$event.text)>
       {{message}}</app-simple-form>
     <hr>
     <my-friends></my-friends>
     {{api}}

import { Component, Inject } from '@angular/core';  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  onUpdate(id,text){
   this.mail.update(id,text);
  }

  title = " Let's get started ";
  constructor(
  @Inject('mail') private mail,
  @Inject('api') private api
  ){}
}
