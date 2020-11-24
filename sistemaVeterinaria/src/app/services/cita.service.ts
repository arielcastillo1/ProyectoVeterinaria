import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  //url='http://sitio2.bitworks.com.sv/backVeterinaria/';
  url='http://localhost:50908/';
  constructor(private http:HttpClient) { }


  getCitas(){
    var ruta :string = this.url+"Api/Cita/GetCitas";
    return this.http.get<Cita[]>(ruta,{responseType:'json'});
  }

  deleteCita(id){
    var ruta :string = this.url+"Api/Cita/Eliminar?id="+id;
    return this.http.get(ruta);
  }

  saveCita(objCita){
    var ruta:string = this.url+"Api/Cita/GuardarCita";
    return this.http.post(ruta,JSON.stringify(objCita),{headers:{'Content-Type':'Application/Json'}});
  }
}
