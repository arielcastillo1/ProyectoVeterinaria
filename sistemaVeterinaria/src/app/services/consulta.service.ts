import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultaPendienteDTO } from '../models/consulta-in';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  //url='http://localhost:50908/';
  url='http://sitio2.bitworks.com.sv/backVeterinaria/';
  constructor(private http:HttpClient) { }

  getListaCitas(){
     var ruta : string = this.url +"Api/Consulta/GetCitasPendientes";
     return this.http.get<ConsultaPendienteDTO[]>(ruta,{responseType:'json'})
  }
}
