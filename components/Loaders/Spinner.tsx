import clsx from 'clsx';
import { FC } from 'react';

import styles from '@/styles/components/loaders.module.scss';

type SpinnerSizes = 'small' | 'medium' | 'large';
interface SpinnerProps {
  size?: SpinnerSizes;
}

const { spinLoader, small, medium, large } = styles;
const sizes = {
  ['small']: small,
  ['medium']: medium,
  ['large']: large,
};

export const Spinner: FC<SpinnerProps> = ({ size = 'medium' }) => (
  <div className={clsx(spinLoader, sizes[size])} />
);
