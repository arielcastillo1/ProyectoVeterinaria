import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/cita';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  listaCitas:Cita[] = null;
  outPut:Cita = new Cita();

  constructor(
    public citaService:CitaService
  ) { }

  ngOnInit(): void {
    this.getListadoCitas();
  }

  getListadoCitas(){
    this.citaService.getCitas().subscribe(result =>{
      this.listaCitas = result;
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  setCita(){
    //alert(JSON.stringify(this.outPut));
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
