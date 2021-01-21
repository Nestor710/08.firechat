import { Component } from '@angular/core';

import { ChatsService } from './services/chats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor( public _cs:ChatsService ) { }

}
