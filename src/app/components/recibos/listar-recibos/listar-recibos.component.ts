import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
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
  listadoRecibos: ReciboSueldoNetoDTO[];
  subscription: Subscription = new Subscription();
  constructor(
    private empleadoService: EmpleadoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      legajo: [, [Validators.required, Validators.min(1)]]
    })
  }

  buscar(): void {
    if (this.formulario.invalid) {
      swal({ title: 'Atención!', text: `Revisá el legajo antes de buscar.`, icon: 'warning' });
      return;
    }
    this.subscription.add(
      this.empleadoService.obtenerRecibosPorLegajo(this.valueLegajo).subscribe({
        next: (res: ReciboSueldoNetoDTO[]) => { this.listadoRecibos = res; },
        error: (e) => {
          if (e.error.error) {
            swal({ title: 'Error!', text: `${e.error.error}: ${e.message}`, icon: 'error' });
          } else {
            swal({ title: 'Error!', text: `${e.error}`, icon: 'error' });
          }
        }
      })
    )
  }

  get controlLegajo(): FormControl {
    return this.formulario.controls['legajo'] as FormControl;
  }

  get valueLegajo(): number {
    return this.formulario.get('legajo')?.value;
  }
}
