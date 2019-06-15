export class Usuario{
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  tipo: number;
}

export class Emprestimo {
  id: number;
  instante: string;
  devolucao: string;
  usuario = new Usuario();
}
