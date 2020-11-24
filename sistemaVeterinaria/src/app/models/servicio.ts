import { DecimalPipe } from '@angular/common';

export class Servicio {
    Codigo : string ; 
    Nombre : string; 
    Descripcion : string; 
    TipoServicio: string ; 
    Periocidad : string ;
    Activo : boolean ;
    Precio : DecimalPipe;
}
