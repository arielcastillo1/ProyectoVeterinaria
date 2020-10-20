import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/cita';
import { JsonPipe } from '@angular/common';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css'],
  providers:[DatePipe]
})
export class CitaComponent implements OnInit {

  listaCitas:Cita[] = null;
  outPut:Cita = new Cita();
  listaClientes:Cliente[] = null

  constructor(
    public citaService:CitaService,
    public clienteService:ClienteService,
    public datePipe:DatePipe
  ) { }

  ngOnInit(): void {
    this.getListadoCitas();
    this.getListadoClientes();
  }

  getListadoCitas(){
    this.citaService.getCitas().subscribe(result =>{
      this.listaCitas = result;
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  getListadoClientes(){
    this.clienteService.getClientes().subscribe(result=>{
      this.listaClientes = result;
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  setCita(){
    //alert(JSON.stringify(this.outPut));    
    this.outPut.FechaReserva = this.datePipe.transform(this.outPut.FechaReserva,'dd/MM/yyyy');
    this.citaService.saveCita(this.outPut).subscribe(result=>{
      alert("Almacenado!");
      this.getListadoCitas();
      this.outPut = new  Cita();
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  deleteCita(id){
    this.citaService.deleteCita(id).subscribe(result=>{
      alert("Eliminado!");
      this.getListadoCitas();
    },error=>{
      alert(JSON.stringify(error))
    })
  }

}
