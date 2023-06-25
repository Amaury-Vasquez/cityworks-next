export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertObject {
  type: AlertType;
  message: string;
}
