import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //url='http://sitio2.bitworks.com.sv/backVeterinaria/';
  url='http://localhost:50908/';
  constructor(private http:HttpClient) { }


  getClientes(){
    var ruta :string = this.url+"Api/Cliente/GetClientes";
    return this.http.get<Cliente[]>(ruta,{responseType:'json'});
  }

  deleteCliente(id){
    var ruta :string = this.url+"Api/Cliente/Eliminar?id="+id;
    return this.http.get(ruta);
  }

  saveCliente(objCliente){
    var ruta:string = this.url+"Api/Cliente/Guardar";
    return this.http.post(ruta,JSON.stringify(objCliente),{headers:{'Content-Type':'Application/Json'}});
  }
}
