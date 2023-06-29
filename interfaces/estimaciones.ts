export interface Estimacion {
  id: string;
  numero: number;
  id_contrato: string;
  periodo: string;
  catalogo: string;
  saldo_estimacion: number;
}

export interface GeneraEstimacion {
  claveCatalogo: string;
}

export interface ReporteEstimacion {
  numero: number;
  periodo: string;
  saldo_estimacion: number;
  catalogo: string;
  id_contrato: number;
  id: string;
  nombre_contrato: string;
  fecha_contrato: string;
  importe_contrato: number;
}
