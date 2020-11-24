import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  //url='http://sitio2.bitworks.com.sv/backVeterinaria/';
  url='http://localhost:50908/';
  constructor(private http:HttpClient) { }


  getServicios(){
    var ruta :string = this.url+"Api/Servicio/GetServicios";
    return this.http.get<Servicio[]>(ruta,{responseType:'json'});
  }

  deleteServicio(id){
    var ruta :string = this.url+"Api/Servicio/Eliminar?id="+id;
    return this.http.get(ruta);
  }

  saveServicio(objServicio){
    var ruta:string = this.url+"Api/Servicio/Guardar";
    return this.http.post(ruta,JSON.stringify(objServicio),{headers:{'Content-Type':'Application/Json'}});
  }
}
