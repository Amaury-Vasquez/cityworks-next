import clsx from 'clsx';
import { FC } from 'react';
import {
  MdOutlineError,
  MdOutlineCheckCircle,
  MdOutlineWarningAmber,
  MdOutlineInfo,
} from 'react-icons/md';
import { AlertType } from '@/interfaces';

const ALERT_TYPE_CLASSES = {
  error: 'alert-error',
  success: 'alert-success',
  warning: 'alert-warning',
  info: 'alert-info',
};

const ALERT_TYPE_ICONS = {
  error: MdOutlineError,
  success: MdOutlineCheckCircle,
  warning: MdOutlineWarningAmber,
  info: MdOutlineInfo,
};

interface AlertProps {
  type: AlertType;
  text: string;
}

export const Alert: FC<AlertProps> = ({ type, text }) => {
  const Icon = ALERT_TYPE_ICONS[type];
  return (
    <div
      className={clsx(
        'alert animate-fadeIn w-fit ml-auto mr-1',
        ALERT_TYPE_CLASSES[type]
      )}
    >
      <Icon className="text-xl" />
      <span className="font-bold"> {text} </span>
    </div>
  );
};
