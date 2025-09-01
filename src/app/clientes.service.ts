// clientes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  apiUrl = 'http://localhost:8888/mi_proyecto/clientes.php';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  agregarCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }

  editarCliente(cliente: any): Observable<any> {
    return this.http.put(`${this.apiUrl}?id=${cliente.id}`, cliente);
  }

  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
}
