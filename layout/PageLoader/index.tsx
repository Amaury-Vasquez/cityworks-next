import { FC } from 'react';
import { Loader } from '@/components';

export const PageLoader: FC = () => (
  <div className="w-full flex h-80 items-center justify-center space-x-2">
    <Loader type="bars" className="delay-100" size="lg" />
  </div>
);
