export class ConsultaPendienteDTO
{
    Cliente :string;
    IdCita 		:string ;
    FechaCita   :string ;
    Motivo      :string ;

    MascotasCliente 	:	MascotasConsultaDTO[];
    MedicosDisponibles 	:	EmpleadoConsultaDTO[]; 
}

export class MascotasConsultaDTO
{
    IdMascota 	: string ;
        NombreMascota :  string;
}

export class EmpleadoConsultaDTO
{
        IdEmpleado 	:string;
        NombreEmpleado :string;
}