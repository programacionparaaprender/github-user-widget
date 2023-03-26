import { NgModule } from '@angular/core';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BuscadorUsuarioComponent } from './components/buscador-usuario/buscador-usuario.component';
const COMPONENT = [UsuarioComponent, BuscadorUsuarioComponent]

@NgModule({
  declarations: COMPONENT,
  imports: [],
  exports: COMPONENT
})
export class GithubUserWidgetModule { }
