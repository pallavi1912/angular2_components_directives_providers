import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  
  messages=[
  {id:0, text:`You have got a mail`},
  {id:1, text:`mail2`},
  {id:2, text:`mail3`},];

  update(id, text){
   this.messages= this.messages.map(m =>
   m.id === id
   ?{id,text} 
   : m)
  }

  constructor() { }

}
