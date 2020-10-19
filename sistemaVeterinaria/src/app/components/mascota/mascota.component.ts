import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/services/mascota.service';
import { Mascota } from 'src/app/models/mascota';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  listaMascotas:Mascota[] = null;
  outPut:Mascota = new Mascota();

  constructor(
    public mascotaService:MascotaService
  ) { }

  ngOnInit(): void {
    this.getListadoMascotas();
  }

  getListadoMascotas(){
    this.mascotaService.getMascotas().subscribe(result =>{
      this.listaMascotas = result;
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
      alert(JSON.stringify(error))
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
