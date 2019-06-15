import { Livro } from './../model';
import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../livros.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros-cadastro.component.css']
})
export class LivrosCadastroComponent implements OnInit {

  livro = new Livro();

  constructor(
    private service: LivrosService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.service.adicionar(this.livro)
    .then( () => {
      this.messageService.add({severity: 'success', summary: 'Cadastro',
      detail: 'Livro ' + this.livro.titulo + ' cadastrado'});
      form.reset();
    });
  }

}
