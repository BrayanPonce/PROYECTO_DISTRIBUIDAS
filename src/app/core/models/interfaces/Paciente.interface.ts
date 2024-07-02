export interface Paciente{

  idpac?:number;
  nombre: string;
  apellido:string;
  domicilio: string;
  fecha_nac: Date;
  lugar_nac: string;
  // dni: number;
  // sexo: string;
  telefeno: number;
  residencia: string;
  estado_civil: string;
  n_hijos: number;
  referencia: string;
  tipo_documento: boolean;
  ndoc_documento: number;
  correo: string;
}
