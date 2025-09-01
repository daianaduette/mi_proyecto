import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { ProductosComponent } from './productos/productos.component';
import { PersonalizadosComponent } from './personalizados/personalizados.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { BaseComponent } from './base/base.component';

export const routes: Routes = [
  {path:'',component: PrincipalComponent},
  {path:'servicios',component: ServiciosComponent},
  {path:'crear-cuenta',component: CrearCuentaComponent},
  {path:'productos',component: ProductosComponent},
  {path:'personalizados',component: PersonalizadosComponent},
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'base', component: BaseComponent },
  { path: 'usuarios', component: UsuariosComponent },


];
