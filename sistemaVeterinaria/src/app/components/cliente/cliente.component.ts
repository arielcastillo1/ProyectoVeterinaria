import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  listaClientes:Cliente[] = null;
  outPut:Cliente = new Cliente();

  constructor(
    public clienteService:ClienteService
  ) { }

  ngOnInit(): void {
    this.getListadoClientes();
  }

  getListadoClientes(){
    this.clienteService.getClientes().subscribe(result =>{
      this.listaClientes = result;
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  setCliente(){
    //alert(JSON.stringify(this.outPut));
    this.clienteService.saveCliente(this.outPut).subscribe(result=>{
      alert("Almacenado!");
      this.getListadoClientes();
      this.outPut = new  Cliente();
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  deleteCliente(id){
    this.clienteService.deleteCliente(id).subscribe(result=>{
      alert("Eliminado!");
      this.getListadoClientes();
    },error=>{
      alert(JSON.stringify(error))
    })
  }

}
