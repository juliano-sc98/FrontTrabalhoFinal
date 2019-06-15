import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosCadastroComponent } from './livros-cadastro/livros-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from 'primeng/button';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { RouterModule } from '@angular/router';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { LivrosService } from './livros.service';

@NgModule({
  declarations: [LivrosCadastroComponent],
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
    LivrosCadastroComponent
  ],
  providers: [
    LivrosService
  ]
})
export class LivrosModule { }
