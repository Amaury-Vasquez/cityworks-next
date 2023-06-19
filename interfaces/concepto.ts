export interface Concepto {
  nombre: string;
  clave: string;
  unidad: string;
  importe: number;
  precio: number;
  cantidad: number;
  descripcion: string;
}

export interface CreaConcepto {
  nombre: string;
  unidad: string;
  precio: number;
  cantidad: number;
  descripcion: string;
}
