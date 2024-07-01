import { Paciente } from "./Paciente.interface";

export interface IClinico {
  idhc?:number;
  inic_enferm:string;
  etiologia:string;
  diagnostico:string;
  observacion:String;
  fech_eval:Date;
  inic_trat:Date;
  peso:number;
  talla:number;
  temp:number;
  gs:string;
  fc:string;
  enf_cronic:string;
  plapago:string;
  paciente: Paciente;
}
