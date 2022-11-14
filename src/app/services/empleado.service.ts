import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoListadoDTO } from '../models/EmpleadoListadoDTO';
import { EmpleadoPostDTO } from '../models/EmpleadoPostDTO';
import { ReciboSueldoNetoDTO } from '../models/ReciboSueldoNetoDTO';

@Injectable()
export class EmpleadoService {
  private readonly API_URL = "http://localhost:8080/api/empleado/";
  constructor(
    private http: HttpClient
  ) { }
  public obtenerTodos(): Observable<EmpleadoListadoDTO[]> {
    return this.http.get<EmpleadoListadoDTO[]>(this.API_URL);
  }
  public registrar(empleado: EmpleadoPostDTO): Observable<EmpleadoPostDTO> {
    return this.http.post<EmpleadoPostDTO>(this.API_URL+'nuevo',empleado)
  }
  public obtenerRecibosPorLegajo(legajo: number): Observable<ReciboSueldoNetoDTO[]> {
    return this.http.get<ReciboSueldoNetoDTO[]>(this.API_URL+legajo+'/recibos')
  }
}
