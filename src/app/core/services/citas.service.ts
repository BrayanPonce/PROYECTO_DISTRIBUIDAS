import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/producto';
import { Cita } from '../index.model.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private CITAURL = environment.baseURL + 'cita';

  constructor(private http: HttpClient) { }

  ////////////////////////////////////////////////////

  listarCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.CITAURL}/all`);
  }

  buscarCita(cita: Cita): Observable<Cita> {

    const url = `${this.CITAURL}/one/${cita.idcita}`;

    return this.http.get<Cita>(url);
  }

  buscarCitaPorPaciente(cita: Cita): Observable<Cita[]> {
    const url = `${this.CITAURL}/buscar-my-citas/${cita.idpaciente}`;
    return this.http.get<Cita[]>(url);

  }

  crearCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(`${this.CITAURL}/save`, cita);
  }

  editarCita(cita: Cita): Observable<Cita> {
    const url = `${this.CITAURL}/editar/${cita.idcita}`;
    return this.http.put<Cita>(url, cita);
  }

  eliminarCita(cita: Cita): Observable<Cita> {
    const url = `${this.CITAURL}/delete/${cita.idcita}`;
    return this.http.delete<Cita>(url);
  }

}
