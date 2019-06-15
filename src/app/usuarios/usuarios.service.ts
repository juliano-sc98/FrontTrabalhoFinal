import { Usuario } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarioURL = 'http://localhost:8080/usuarios'

  constructor(private http: HttpClient) { }

  adicionar(usuario: Usuario): Promise<any> {
    return this.http.post(this.usuarioURL, usuario).toPromise();
  }

}
