import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReciboSueldoNetoDTO } from 'src/app/models/ReciboSueldoNetoDTO';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-listar-recibos',
  templateUrl: './listar-recibos.component.html',
  styleUrls: ['./listar-recibos.component.css']
})
export class ListarRecibosComponent implements OnInit {

  formulario: FormGroup;
  listadoRecibos: ReciboSueldoNetoDTO[];
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
    alert('todo')
  }

  get controlLegajo(): FormControl {
    return this.formulario.controls['legajo'] as FormControl;
  }
}
