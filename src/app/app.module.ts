import { EmprestimosCadastroComponent } from './emprestimos/emprestimos-cadastro/emprestimos-cadastro.component';
import { EmprestimosModule } from './emprestimos/emprestimos.module';
import { EmprestimosPesquisaComponent } from './emprestimos/emprestimos-pesquisa/emprestimos-pesquisa.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosCadastroComponent } from './usuarios/usuarios-cadastro/usuarios-cadastro.component';
import { LivrosCadastroComponent } from './livros/livros-cadastro/livros-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Routes, RouterModule } from '@angular/router';

import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AppComponent } from './app.component';
import { LivrosModule } from './livros/livros.module';

const rotas: Routes = [
  {path: '', redirectTo:'emprestimos', pathMatch:'full'},
  {path: 'livros', component: LivrosCadastroComponent},
  {path: 'usuarios', component: UsuariosCadastroComponent},
  {path: 'emprestimos', component: EmprestimosPesquisaComponent},
  {path: 'emprestimos/novo', component: EmprestimosCadastroComponent},
  {path: 'emprestimos/:id', component: EmprestimosCadastroComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    SidebarModule,
    ButtonModule,
    LivrosModule,
    UsuariosModule,
    EmprestimosModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
