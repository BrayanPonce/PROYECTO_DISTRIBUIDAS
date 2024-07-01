import { IClinico } from './IClinico.interface';

export interface Sesiones {

  id_nsesiones?: number;
  fecha: Date;
  hora: string;
  tratamiento: string;
  asistencia: string;
  IClinico: IClinico;

}
