import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmprestimosService {

  emprestimosURL = 'http://localhost:8080/emprestimos';

  constructor() { }
}
