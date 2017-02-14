import { Component} from '@angular/core';
import { FriendService} from 'app/friend.service';

@Component({
  selector: 'my-friend',
  template: `<div *ngFor="let f of friends">
     <h1>Name : {f.name}</h1>
     <h1>Age : {f.age}</h1>
  </div>`,
  style: [`
     div { 
     background-color:#EFEFEF;
     margin-bottom:15px;
     padding:15px;
     border:1px solid #DDD;
     box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
     border-radius:3px;
  }
  h2 { 
    text-align: center;
  }
  `]
})
export class FriendComponent {
    componentName: 'FriendComponent';
    constructor(private _friendservice: FriendService){
       this.friends = _friendservice.getFriends();
    }
} 