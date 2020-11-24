import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { ConsultaPendienteDTO } from 'src/app/models/consulta-in';

@Component({
  selector: 'app-consultas-pendientes',
  templateUrl: './consultas-pendientes.component.html',
  styleUrls: ['./consultas-pendientes.component.css']
})
export class ConsultasPendientesComponent implements OnInit {

  listaConsultas:ConsultaPendienteDTO[] = null;
  constructor(
    public consultaService:ConsultaService
  ) { }

  ngOnInit(): void {
    this.getListadoConsultas();
  }

  getListadoConsultas(){
    this.consultaService.getListaCitas().subscribe(result=>{
      this.listaConsultas =result;
    },error=>{
      alert(JSON.stringify(error))
    })
  }

}
