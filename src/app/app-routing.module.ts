import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaEmpleadoComponent } from './components/empleados/alta-empleado/alta-empleado.component';
import { ListadoEmpleadosComponent } from './components/empleados/listado-empleados/listado-empleados.component';
import { HomeComponent } from './components/home/home.component';
import { AltaReciboComponent } from './components/recibos/alta-recibo/alta-recibo.component';
import { ListarRecibosComponent } from './components/recibos/listar-recibos/listar-recibos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empleados/listado', component: ListadoEmpleadosComponent },
  { path: 'empleados/nuevo', component: AltaEmpleadoComponent },
  { path: 'recibos/listado', component: ListarRecibosComponent },
  { path: 'recibos/nuevo', component: AltaReciboComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
