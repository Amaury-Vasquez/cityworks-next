export interface Estimacion {
  nombre: string;
  clave: string;
  unidad: string;
  programado: string;
  acumulado: number;
  estimado: number;
  total: number;
  faltante: number;
  precio: number;
  importe: number;
  descripcion: string;
}

export interface CreaEstimacion {
  nombre: string;
  unidad: string;
  programado: string;
  acumulado: number;
  total: number;
  faltante: number;
  precio: number;
  descripcion: string;
}
