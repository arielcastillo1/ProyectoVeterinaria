import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../models/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  //url='http://sitio2.bitworks.com.sv/backVeterinaria/';
  url='http://localhost:50908/';
  constructor(private http:HttpClient) { }


  getMascotas(){
    var ruta :string = this.url+"Api/Mascota/GetMascotas";
    return this.http.get<Mascota[]>(ruta,{responseType:'json'});
  }

  deleteMascota(id){
    var ruta :string = this.url+"Api/Mascota/Eliminar?id="+id;
    return this.http.get(ruta);
  }

  saveMascota(objMascota){
    var ruta:string = this.url+"Api/Mascota/Guardar";
    return this.http.post(ruta,JSON.stringify(objMascota),{headers:{'Content-Type':'Application/Json'}});
  }
}
