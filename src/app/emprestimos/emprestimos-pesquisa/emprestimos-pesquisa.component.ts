import { ActivatedRoute } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { EmprestimosService } from './../emprestimos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprestimos-pesquisa',
  templateUrl: './emprestimos-pesquisa.component.html',
  styleUrls: ['./emprestimos-pesquisa.component.css']
})
export class EmprestimosPesquisaComponent implements OnInit {

  emprestimos = [];
  livros = [];

  constructor(
    private service: EmprestimosService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
    this.pesquisarLivros();
  }

  pesquisar() {
    this.service.pesquisar()
    .then((dados) => {this.emprestimos = dados;});
  }

  pesquisarLivros() {
    this.service.listarLivros().then((dados) => {
      this.livros = dados.map(e => ({label: e.titulo, value: e.id}));
    });
  }

}
