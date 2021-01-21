import { Component } from '@angular/core';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor( private _cs:ChatsService ) { }

  ingresar( proveedor:string ){
    console.log(proveedor);

    this._cs.login( proveedor );
  }

}
