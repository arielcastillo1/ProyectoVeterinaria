import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from '../components/sing-in/sing-in.component';
import { InicioComponent } from '../components/inicio/inicio.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SingInComponent },
  { path: 'inicio', component: InicioComponent,canActivate:[AuthGuard]}  
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
