import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livro } from './model';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livrosURL = 'http://localhost:8080/livros'

  constructor(private http: HttpClient) { }

  adicionar(livro: Livro): Promise<any> {
    return this.http.post(this.livrosURL, livro).toPromise();
  }
}
