import { FC } from 'react';
import { Spinner } from '@/components';
import styles from '@/styles/layout/layout.module.scss';

export const FallbackScreen: FC = () => (
  <div className={styles.fallback}>
    <Spinner size="large" />
  </div>
);
