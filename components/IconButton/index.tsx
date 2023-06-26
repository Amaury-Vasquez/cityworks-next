import clsx from 'clsx';
import { FC } from 'react';
import { IconType } from 'react-icons/lib';

export interface IconButtonProps {
  Icon: IconType;
  className?: string;
  iconStyle?: string;
  onClick?: () => void;
}

export const IconButton: FC<IconButtonProps> = ({
  Icon,
  className,
  iconStyle,
  ...props
}) => (
  <button
    className={clsx(
      'p-2 w-10 h-10 rounded-full bg-gray hover:bg-darker transition-all hover:scale-110 duration-300 flex justify-center items-center',
      className
    )}
    {...props}
  >
    <Icon className={iconStyle ? iconStyle : 'w-full h-full text-primary'} />
  </button>
);
