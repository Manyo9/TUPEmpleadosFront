import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmpleadoService } from '../../../services/empleado.service'

@Component({
  selector: 'app-alta-empleado',
  templateUrl: './alta-empleado.component.html',
  styleUrls: ['./alta-empleado.component.css']
})
export class AltaEmpleadoComponent implements OnInit, OnDestroy {

  formulario: FormGroup;
  subscription: Subscription = new Subscription();
  constructor(
    private formBuilder: FormBuilder,
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: [, Validators.required],
      apellido: [, Validators.required],
      fechaNacimiento: [, Validators.required],
      fechaIngreso: [, Validators.required],
      sueldoBruto: [, [Validators.required]],
      area: [, Validators.required]
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  guardar(): void {
    alert("To do");
  }
  
  volver(): void {
    this.router.navigate(['empleados/listado']);
  }

  get controlNombre(): FormControl {
    return this.formulario.controls['nombre'] as FormControl;
  }

  get controlApellido(): FormControl {
    return this.formulario.controls['apellido'] as FormControl;
  }

  get controlFechaNacimiento(): FormControl {
    return this.formulario.controls['fechaNacimiento'] as FormControl;
  }

  get controlFechaIngreso(): FormControl {
    return this.formulario.controls['fechaIngreso'] as FormControl;
  }

  get controlSueldo(): FormControl {
    return this.formulario.controls['sueldoBruto'] as FormControl;
  }

  get controlArea(): FormControl {
    return this.formulario.controls['area'] as FormControl;
  }
}
