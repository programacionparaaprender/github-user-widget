import { Component, Input } from '@angular/core';
import { Usuario } from 'projects/github-user-widget/src/lib/interfaces/usuario.interface';
import { USUARIOAPI } from 'projects/github-user-widget/src/lib/constants/usuario';
import { BuscadorUsuarioService } from 'projects/github-user-widget/src/lib/services/buscador-usuario.service';
@Component({
  selector: 'guw-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  @Input() busqueda: string;
  usuario: Usuario | null;
  constructor(private readonly buscadorUsuarioService: BuscadorUsuarioService) {
    this.busqueda = '';
    this.usuario = null;
    if(this.busqueda === undefined || this.busqueda === null || this.busqueda === ''){
      this.usuario = USUARIOAPI;
    }
    this.buscadorUsuarioService.obtenerDatosUsuario(this.busqueda).then(
      (data: any) => {
        this.usuario = data;
      }
    );
  }
}
