export interface UserKey {
  id: string;
}

export interface User extends UserKey {
  nome_produto: string;
  valor_produto: string;
}
