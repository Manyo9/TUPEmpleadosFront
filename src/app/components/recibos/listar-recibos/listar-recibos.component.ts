import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReciboSueldoNetoDTO } from 'src/app/models/ReciboSueldoNetoDTO';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-listar-recibos',
  templateUrl: './listar-recibos.component.html',
  styleUrls: ['./listar-recibos.component.css']
})
export class ListarRecibosComponent implements OnInit {

  formulario: FormGroup;
  $listadoRecibos: Observable<ReciboSueldoNetoDTO[]>;
  constructor(
    private empleadoService : EmpleadoService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      legajo: [, Validators.required]
    })
  }

  buscar(): void {
    if(this.formulario.invalid){
      swal({ title: 'Atención!', text: `Ingresá un legajo antes de buscar.`, icon: 'warning' });
      return;
    }
    this.$listadoRecibos =  this.empleadoService.obtenerRecibosPorLegajo(this.valueLegajo);
  }

  get controlLegajo(): FormControl {
    return this.formulario.controls['legajo'] as FormControl;
  }

  get valueLegajo(): number {
    return this.formulario.get('legajo')?.value;
  }
}
