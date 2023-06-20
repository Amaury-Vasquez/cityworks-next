export interface Concepto {
  clave: string;
  nombre: string;
  descripcion: string;
  unidad: string;
  precio: number;
  cantidad: number;
  importe: number;
}

export interface CreaConcepto {
  nombre: string;
  unidad: string;
  precio: number;
  cantidad: number;
  descripcion: string;
}
