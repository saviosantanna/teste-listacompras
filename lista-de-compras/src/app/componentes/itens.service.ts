import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItensService {

  //private readonly API = 'http://localhost:3000/lista'
  private readonly API = 'https://teste-bd-json-serve.vercel.app/lista'
  constructor(private http: HttpClient) { }

  listar(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API);
  }

  criar(lista: Item): Observable<Item>{
    return this.http.post<Item>(this.API, lista)
  }

  editarCheck(item: Item): Observable<Item>{
    item.check = !item.check
    const url = `${this.API}/${item.id}`
    return this.http.put<Item>(url, item);
  }

  editar(item: Item): Observable<Item>{
    const url = `${this.API}/${item.id}`
    return this.http.put<Item>(url, item);
  }

  excluir(item: Item): Observable<Item>{
    const url = `${this.API}/${item.id}`
    return this.http.delete<Item>(url);
  }

}
