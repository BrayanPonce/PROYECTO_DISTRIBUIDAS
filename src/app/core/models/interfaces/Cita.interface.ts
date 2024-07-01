import { Estado_Cita } from "./Estado_Cita.interface";
import { Paciente } from "./Paciente.interface";

export interface Cita {
  idcita?: number;
  tipo: string;
  idpaciente: Paciente;
  hora: Date;
  n_sesion: number;
  fecha: Date;
  estado_cita: Estado_Cita;
}
