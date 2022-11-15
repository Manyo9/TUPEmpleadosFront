import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReciboReporteDTO } from 'src/app/models/ReciboReporteDTO';
import { ReciboService } from 'src/app/services/recibo.service';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-reporte-sueldos-netos',
  templateUrl: './reporte-sueldos-netos.component.html',
  styleUrls: ['./reporte-sueldos-netos.component.css']
})
export class ReporteSueldosNetosComponent implements OnInit {

  formulario: FormGroup;
  $reporte: Observable<ReciboReporteDTO[]>;
  readonly MIN_ANIO: number = 1901;

  constructor(
    private reciboService : ReciboService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      mes: [, [Validators.required, Validators.min(1), Validators.max(12)]],
      anio: [, [Validators.required, Validators.min(1901)]]
    })
  }

  generar(): void {
    if(this.formulario.invalid){
      swal({ title: 'Atención!', text: `Revisá los parámetros antes de generar`, icon: 'warning' });
      return;
    }
    this.$reporte =  this.reciboService.obtenerReporte(this.valueAnio, this.valueMes);
  }
  
  get controlMes(): FormControl {
    return this.formulario.controls['mes'] as FormControl;
  }

  get controlAnio(): FormControl {
    return this.formulario.controls['anio'] as FormControl;
  }

  get valueMes(): number {
    return this.formulario.get('mes')?.value;
  }

  get valueAnio(): number {
    return this.formulario.get('anio')?.value;
  }

}
