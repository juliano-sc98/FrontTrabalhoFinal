import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emprestimo } from './model';

@Injectable({
  providedIn: 'root'
})
export class EmprestimosService {

  emprestimosURL = 'http://localhost:8080/emprestimos';
  usuariosURL = 'http://localhost:8080/usuarios';
  livrosURL = 'http://localhost:8080/livros'

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(): Promise<any> {
    return this.http.get<any>(this.emprestimosURL).toPromise();
  }

  exluir(id:number): Promise<any> {
    return this.http.delete(this.emprestimosURL+ '/' + id)
    .toPromise().then(() => null);
  }

  adicionar(emprestimo: Emprestimo): Promise<any> {
    console.log(emprestimo);
    return this.http.post(this.emprestimosURL, emprestimo).toPromise();
  }

  alterar(emprestimo: Emprestimo): Promise<any> {
    return this.http.put(this.emprestimosURL+'/'+emprestimo.id, emprestimo).toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Emprestimo> {
    return this.http.get<Emprestimo>(this.emprestimosURL+'/'+codigo).toPromise();
  }

  listarUsuarios(): Promise<any> {
    return this.http.get<any>(this.usuariosURL).toPromise();
  }

  listarLivros(): Promise<any> {
    return this.http.get<any>(this.livrosURL).toPromise();
  }
}
