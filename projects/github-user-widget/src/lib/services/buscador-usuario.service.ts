import { Injectable } from '@angular/core';
import * as api from 'proyecto-1b-api-github';
import { Usuario } from 'projects/github-user-widget/src/lib/interfaces/usuario.interface';
@Injectable({
  providedIn: 'root'
})
export class BuscadorUsuarioService {

  constructor() { }
  obtenerDatosUsuario(usuario: string){
    return new Promise(function(resolve: any){
      api.obtenerDatosUsuario(usuario).then((data: Usuario)=>{
        resolve(data);
      })
    })
  }
}
