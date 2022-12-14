import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmpleadoService } from './services/empleado.service';
import { ReciboService } from './services/recibo.service';
import { ListadoEmpleadosComponent } from './components/empleados/listado-empleados/listado-empleados.component';
import { AltaEmpleadoComponent } from './components/empleados/alta-empleado/alta-empleado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarRecibosComponent } from './components/recibos/listar-recibos/listar-recibos.component';
import { AltaReciboComponent } from './components/recibos/alta-recibo/alta-recibo.component';
import { ReporteSueldosNetosComponent } from './components/recibos/reporte-sueldos-netos/reporte-sueldos-netos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    ListadoEmpleadosComponent,
    AltaEmpleadoComponent,
    ListarRecibosComponent,
    AltaReciboComponent,
    ReporteSueldosNetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    EmpleadoService,
    ReciboService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
