import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaEmpleadoComponent } from './components/empleados/alta-empleado/alta-empleado.component';
import { ListadoEmpleadosComponent } from './components/empleados/listado-empleados/listado-empleados.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'empleados/listado', component: ListadoEmpleadosComponent },
  { path: 'empleados/nuevo', component: AltaEmpleadoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
