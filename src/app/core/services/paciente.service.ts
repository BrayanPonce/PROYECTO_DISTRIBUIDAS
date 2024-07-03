import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/producto';
import { Paciente } from '../index.model.interface';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private PACIENTEURL = environment.baseURL + 'paciente';

  constructor( private http: HttpClient) { }

  ////////////////////////////////////////////////////

  listarpacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.PACIENTEURL}/all`);
  }

  getPaciente(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.PACIENTEURL}/one/${id}`);
  }

  crearPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${this.PACIENTEURL}/save`, paciente);
  }

}

