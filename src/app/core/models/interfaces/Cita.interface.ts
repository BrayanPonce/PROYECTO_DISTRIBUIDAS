import { Estado_Cita } from "./Estado_Cita.interface";
import { Paciente } from "./Paciente.interface";

export interface Cita {
  idcita?: number;
  tipo: string;
  hora: Date;
  n_sesion: number;
  fecha: Date;
  pacienteDTOs?: Paciente;
  estadoCita: Estado_Cita;
}
