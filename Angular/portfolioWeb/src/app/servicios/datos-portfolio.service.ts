import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DatosPortfolioService {

  constructor(private http: HttpClient) {}
 
 getinfo(): Observable<any> {
    return this.http.get("http://localhost:8080/readPerson");
  }

  geteducacion(): Observable<any> {
    return this.http.get("http://localhost:8080/readEduc");
  }

  getexperiencia(): Observable<any> {
    return this.http.get("http://localhost:8080/readExp");
  }

  gethabilidades(): Observable<any> {
    return this.http.get("http://localhost:8080/readSkill");
  }

  getproyectos(): Observable<any> {
    return this.http.get("http://localhost:8080/readProy");
  }

 
  
}
