import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from '../components/sing-in/sing-in.component';
import { InicioComponent } from '../components/inicio/inicio.component';
import { AuthGuard } from '../services/auth.guard';
import { AuthService } from '../services/auth.service';
import { ClienteComponent } from '../components/cliente/cliente.component';
import { MascotaComponent } from '../components/mascota/mascota.component';
import { CitaComponent } from '../components/cita/cita.component';
import { ServicioComponent } from '../components/servicio/servicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'sign-in', component: SingInComponent },
  { path: 'inicio', component: InicioComponent,canActivate:[AuthGuard]},
  { path: 'cliente',component:ClienteComponent,canActivate:[AuthGuard]},
  { path: 'mascota',component:MascotaComponent,canActivate:[AuthGuard]},
  { path: 'cita',component:CitaComponent,canActivate:[AuthGuard]} ,
  { path: 'servicio',component:ServicioComponent,canActivate:[AuthGuard]},
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
