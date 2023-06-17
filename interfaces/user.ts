export interface User {
  email: string;
  nombre: string;
  id_usuario: string;
  apellido: string;
  rol: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  rol: string;
}

export interface LoginFailResponse {
  message: string;
  status: 401;
}

export interface LoginGoodResponse {
  user: User;
  status: 200;
}
