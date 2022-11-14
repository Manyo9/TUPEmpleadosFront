import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recibo } from '../models/Recibo';
import { ReciboReporteDTO } from '../models/ReciboReporteDTO';

@Injectable()
export class ReciboService {
  private readonly API_URL = "http://localhost:8080/api/recibos/";
  constructor(
    private http: HttpClient
  ) { }
  public obtenerReporte(anio:number,mes:number): Observable<ReciboReporteDTO[]> {
    return this.http.get<ReciboReporteDTO[]>(`${this.API_URL}reporte?anio=${anio}&mes=${mes}`);
  }
  public registrar(recibo: Recibo): Observable<Recibo> {
    return this.http.post<Recibo>(this.API_URL+'nuevo', recibo);
  }
}
