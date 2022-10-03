import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosPortfolioService {
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> { //los observable son futuros eventos y definiendolo asi el componente espera la respuesta
    return this.http.get('assets/Data/Data.json');
  }
}
