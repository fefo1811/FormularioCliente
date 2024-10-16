import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Components/Home/form/Cliente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  getData(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }


  addItem(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }
  
}
