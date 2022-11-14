import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoListadoDTO } from 'src/app/models/EmpleadoListadoDTO';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrls: ['./listado-empleados.component.css']
})
export class ListadoEmpleadosComponent implements OnInit {
  $empleados: Observable<EmpleadoListadoDTO[]>;
  constructor(
    private empleadoService: EmpleadoService
  ) { }

  ngOnInit(): void {
    this.$empleados =  this.empleadoService.obtenerTodos();
  }

}
