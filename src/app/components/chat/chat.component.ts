import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje:string = "";
  elemento:any;

  constructor(  public _cs:ChatsService ) {
    this._cs.cargarMensajes()
            .subscribe( ()=>{
              setTimeout( ()=>{
                this.elemento.scrollTop = this.elemento.scrollHeight;
              },20 )
            });
  }

  ngOnInit(){
    this.elemento = document.getElementById('app-mensajes')
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    if (this.mensaje.length === 0) {
        return;
    }
    this._cs.agregarMensaje( this.mensaje )
                            .then( ()=>  this.mensaje = ""/* console.log('Mensaje Enviado') */ )
                            .catch( (err)=>console.error('Error al enviar mensaje', err) );
                            
  }

}
