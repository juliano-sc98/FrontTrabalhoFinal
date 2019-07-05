export class Usuario{
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  tipo: number;
}

export class Livro{
  id: number;
  titulo: string;
  areaConhecimento: string;
  exemplares: number;
  localizacao: string;
}

export class Emprestimo {
  id: number;
  instante: string;
  devolucao: string;
  itens: Array<Livro>;
  usuario = new Usuario();
  livro1 = new Livro();
  livro2 = new Livro();
  livro3 = new Livro();
}
