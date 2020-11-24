import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { CitaComponent } from './components/cita/cita.component';
import { ConsultasPendientesComponent } from './components/consultas-pendientes/consultas-pendientes.component';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    InicioComponent,
    ClienteComponent,
    MascotaComponent,
    CitaComponent,
    ConsultasPendientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
