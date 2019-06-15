import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UsuariosService } from './../usuarios.service';
import { Usuario } from './../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-cadastro',
  templateUrl: './usuarios-cadastro.component.html',
  styleUrls: ['./usuarios-cadastro.component.css']
})
export class UsuariosCadastroComponent implements OnInit {

  usuario = new Usuario();

  constructor(
    private service: UsuariosService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.service.adicionar(this.usuario)
    .then( () => {
      this.messageService.add({severity: 'success', summary: 'Cadastro',
        detail: 'Usuario ' + this.usuario.nome + ' cadastrado'});
      form.reset();
    });
  }
}
