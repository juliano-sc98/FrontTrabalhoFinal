import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprestimosPesquisaComponent } from './emprestimos-pesquisa/emprestimos-pesquisa.component';
import { EmprestimosCadastroComponent } from './emprestimos-cadastro/emprestimos-cadastro.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { EmprestimosService } from './emprestimos.service';


@NgModule({
  declarations: [EmprestimosPesquisaComponent, EmprestimosCadastroComponent],
  imports: [
    CommonModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    EmprestimosPesquisaComponent,
    EmprestimosCadastroComponent
  ],
  providers: [
    EmprestimosService
  ],
})
export class EmprestimosModule { }
