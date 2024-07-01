import { IClinico } from "./IClinico.interface";

export interface Pago{
  idpago?: number;
  n_sesion: number;
  pago: number;
  idhc: IClinico;
}
