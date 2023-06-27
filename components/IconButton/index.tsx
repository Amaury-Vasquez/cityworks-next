import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

export interface IconButtonProps {
  Icon: IconType;
  className?: string;
  iconStyle?: string;
  tooltip?: string;
  tooltipStyle?: string;
  onClick?: () => void;
}

export const IconButton: FC<IconButtonProps> = ({
  Icon,
  className,
  iconStyle,
  tooltip,
  tooltipStyle,
  ...props
}) => (
  <button
    className={clsx(
      'p-2 w-10 h-10 rounded-full bg-gray hover:bg-darker transition-all hover:scale-110 duration-300 flex justify-center items-center',
      tooltip && 'tooltip',
      tooltipStyle ? tooltipStyle : 'tooltip-info',
      className
    )}
    {...(tooltip && { 'data-tip': tooltip })}
    {...props}
  >
    <Icon
      className={clsx('w-full h-full', iconStyle ? iconStyle : ' text-primary')}
    />
  </button>
);
