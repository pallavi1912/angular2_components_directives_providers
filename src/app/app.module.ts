import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';
import { FriendComponent } from './friend.component';
import { FriendService } from './friend.service';
@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    SimpleFormComponent,
    SimpleFormComponent,
    SimpleFormComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  {provide: 'mail', useClass:MailService},
  {provide: 'api', useValue:'http://localhost:3000/'},
  {provide: 'friends', useClass:FriendService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
