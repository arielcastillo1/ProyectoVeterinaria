import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota.service';
import { Mascota } from 'src/app/models/mascota';
import { JsonPipe } from '@angular/common';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  listaMascotas:Mascota[] = null;
  outPut:Mascota = new Mascota();
  listaCliente:Cliente[] = null; 

  constructor(
    public mascotaService:MascotaService,
    public clienteService:ClienteService
  ) { }

  ngOnInit(): void {
    this.getListadoMascotas();
    this.getListadoClientes();
  }

  getListadoMascotas(){
    this.mascotaService.getMascotas().subscribe(result =>{
      this.listaMascotas = result;
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  getListadoClientes(){
    this.clienteService.getClientes().subscribe(result=>{
      this.listaCliente = result;
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  setMascota(){
    //alert(JSON.stringify(this.outPut));
    this.mascotaService.saveMascota(this.outPut).subscribe(result=>{
      alert("Almacenado!");
      this.getListadoMascotas();
      this.outPut = new  Mascota();
    },error=>{
      //alert(JSON.stringify(error))
      alert("Complete todos los campos");
    })
  }

  deleteMascota(id){
    this.mascotaService.deleteMascota(id).subscribe(result=>{
      alert("Eliminado!");
      this.getListadoMascotas();
    },error=>{
      alert(JSON.stringify(error))
    })
  }

}
