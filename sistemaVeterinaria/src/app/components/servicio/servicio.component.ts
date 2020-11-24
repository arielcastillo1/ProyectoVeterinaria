import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Servicio } from 'src/app/models/servicio';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  listaServicios:Servicio[] = null;
  outPut:Servicio = new Servicio();

  constructor(
    public servicioService:ServicioService
  ) { }

  ngOnInit(): void {
    this.getListadoServicios();
  }

  getListadoServicios(){
    this.servicioService.getServicios().subscribe(result =>{
      this.listaServicios = result;
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  setServicio(){
    //alert(JSON.stringify(this.outPut));
    this.servicioService.saveServicio(this.outPut).subscribe(result=>{
      alert("Almacenado!");
      this.getListadoServicios();
      this.outPut = new  Servicio();
    },error=>{
      //alert(JSON.stringify(error))
      alert("Complete todos los campos");
    })
  }

  deleteServicio(id){
    this.servicioService.deleteServicio(id).subscribe(result=>{
      alert("Eliminado!");
      this.getListadoServicios();
    },error=>{
      alert(JSON.stringify(error))
    })
  }

}
