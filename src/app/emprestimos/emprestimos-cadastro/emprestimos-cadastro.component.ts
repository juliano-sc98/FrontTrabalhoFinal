import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Emprestimo } from './../model';
import { EmprestimosService } from './../emprestimos.service';

@Component({
  selector: 'app-emprestimos-cadastro',
  templateUrl: './emprestimos-cadastro.component.html',
  styleUrls: ['./emprestimos-cadastro.component.css']
})
export class EmprestimosCadastroComponent implements OnInit {

  emprestimo = new Emprestimo();
  usuarios = [];
  livros = [];

  constructor(
    private service: EmprestimosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pesquisarUsuarios();
    this.pesquisarLivros();
    const codigoEmprestimo = this.rota.snapshot.params['id'];
    if(codigoEmprestimo) {
      this.carregarEmprestimo(codigoEmprestimo);
    }
  }

  carregarEmprestimo(id: number) {
    this.service.buscarPorCodigo(id).then((data) => {this.emprestimo = data;});
  }

  inserir(form: FormControl) {
    this.service.adicionar(this.emprestimo).then(() => {
      this.messageService.add({severity:'success', summary: 'Cadastro',
      detail:'Empréstimo '+ this.emprestimo.id + ' cadastrado'});
      form.reset();
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.emprestimo).then(() => {
      this.messageService.add({severity:'success', summary: 'Edição',
      detail: 'Empréstimo ' + this.emprestimo.id + ' alterado'});
    });
  }

  salvar(form: FormControl) {
    if(this.editando) {
      this.alterar(form);
    } else {
      this.inserir(form);
    }
  }

  get editando() {
    return Boolean(this.emprestimo.id);
  }

  pesquisarUsuarios() {
    this.service.listarUsuarios().then((dados) => {
      this.usuarios = dados.map(e => ({label: e.nome, value: e.id}));
    });
  }

  pesquisarLivros() {
    this.service.listarLivros().then((dados) => {
      this.livros = dados.map(e => ({label: e.titulo, value: e.id}));
    });
  }

}
