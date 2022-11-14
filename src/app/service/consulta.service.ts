import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Consulta } from '../models/consulta'

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  //URL: string = 'http://localhost:3000/'

  //URL: string = 'https://app-ng-mean.herokuapp.com/api'

  URL = environment.URL

  constructor(private http: HttpClient) { }

  guardarConsulta(consulta: Consulta): Observable<any> {
    return this.http.post(this.URL, consulta)
  }

}
