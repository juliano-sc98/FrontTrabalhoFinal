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
  {path: '', redirectTo:'livros', pathMatch:'full'},
  {path: 'livros', component: LivrosCadastroComponent},
  {path: 'usuarios', component: UsuariosCadastroComponent}
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
    RouterModule.forRoot(rotas)
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
