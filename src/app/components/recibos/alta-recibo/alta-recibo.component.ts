import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recibo } from 'src/app/models/Recibo';
import { ReciboService } from 'src/app/services/recibo.service';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-alta-recibo',
  templateUrl: './alta-recibo.component.html',
  styleUrls: ['./alta-recibo.component.css']
})
export class AltaReciboComponent implements OnInit, OnDestroy {


  formulario: FormGroup;
  subscription: Subscription = new Subscription();
  recibo: Recibo;
  constructor(
    private formBuilder: FormBuilder,
    private reciboService: ReciboService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      legajoEmpleado: [, Validators.required],
      mes: [, Validators.required],
      anio: [, Validators.required],
      sueldoBruto: [, [Validators.required]],
      incrementoAntiguedad: [, Validators.required],
      dedJubilacion:[, Validators.required],
      dedObraSocial: [, Validators.required],
      dedFondoAltaCompl:[, Validators.required]
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  guardar(): void {
    if (this.formulario.invalid) {
      swal({ title: 'Atención!', text: `Revise y complete todos los campos!`, icon: 'warning' });
      return;
    }
    this.recibo = this.formulario.value as Recibo;
    this.recibo.legajoEmpleado = {
      "legajo": this.recibo.legajoEmpleado
    }
    this.subscription.add(
      this.reciboService.registrar(this.recibo).subscribe({
        next: () => {
           swal({ title: 'Listo!', text: `Se registró el recibo correctamente`, icon: 'success' });
           this.router.navigate(['recibos/listado']);
        },
        error: (e) => { swal({ title: 'Error!', text: e, icon: 'error' }); }
      })
    )
  }

  volver(): void {
    this.router.navigate(['empleados/listado']);
  }

  get controlLegajo(): FormControl {
    return this.formulario.controls['legajoEmpleado'] as FormControl;
  }

  get controlMes(): FormControl {
    return this.formulario.controls['mes'] as FormControl;
  }

  get controlAnio(): FormControl {
    return this.formulario.controls['anio'] as FormControl;
  }

  get controlSueldo(): FormControl {
    return this.formulario.controls['sueldoBruto'] as FormControl;
  }
  get controlIncrementoAntiguedad(): FormControl {
    return this.formulario.controls['incrementoAntiguedad'] as FormControl;
  }

  get controlDedJubilacion(): FormControl {
    return this.formulario.controls['dedJubilacion'] as FormControl;
  }

  get controlDedObraSocial(): FormControl {
    return this.formulario.controls['dedObraSocial'] as FormControl;
  }
  get controlDedFondoAltaCompl(): FormControl {
    return this.formulario.controls['dedFondoAltaCompl'] as FormControl;
  }
}
