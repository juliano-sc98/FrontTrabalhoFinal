import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosCadastroComponent } from './usuarios-cadastro/usuarios-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from 'primeng/button';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { RouterModule } from '@angular/router';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { UsuariosService } from './usuarios.service';

@NgModule({
  declarations: [UsuariosCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,
    PickListModule,
    ConfirmDialogModule,
    ButtonModule,
    CurrencyMaskModule,
    RouterModule
  ],
  exports: [
    UsuariosCadastroComponent
  ],
  providers: [
    UsuariosService
  ]
})
export class UsuariosModule { }
