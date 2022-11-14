import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEmpleadosComponent } from './components/empleados/listado-empleados/listado-empleados.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path : 'home',component : HomeComponent},
  {path : 'empleados/listado', component: ListadoEmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
