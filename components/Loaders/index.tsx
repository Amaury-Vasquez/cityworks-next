import clsx from 'clsx';
import { FC } from 'react';

export type LoaderType =
  | 'dots'
  | 'spinner'
  | 'ring'
  | 'ball'
  | 'bars'
  | 'infinity';

export type Sizes = 'xs' | 'sm' | 'md' | 'lg';

const SIZES = {
  xs: 'loading-xs',
  sm: 'loading-sm',
  md: 'loading-md',
  lg: 'loading-lg',
};

const TYPES = {
  dots: 'loading-dots',
  spinner: 'loading-spinner',
  ring: 'loading-ring',
  ball: 'loading-ball',
  bars: 'loading-bars',
  infinity: 'loading-infinity',
};

export interface LoaderProps {
  size?: Sizes;
  type?: LoaderType;
  className?: string;
}

export const Loader: FC<LoaderProps> = ({
  size = 'md',
  className,
  type = 'ring',
}) => (
  <span
    className={clsx(
      'loading text-primary',
      TYPES[type],
      SIZES[size],
      className
    )}
  />
);
