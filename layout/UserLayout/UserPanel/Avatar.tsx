import { FC } from 'react';
import Image from 'next/image';

export const Avatar: FC = () => (
  <div className="flex flex-col w-full space-y-2 items-center">
    <div className="avatar">
      <div className="w-28 rounded-full">
        <Image
          src="https://i.pravatar.cc/150?img=17"
          alt="avatar image"
          width={100}
          height={100}
        />
      </div>
    </div>
    <span className="text-primary text-center text-lg font-semibold">
      Amaury Vasquez
    </span>
  </div>
);
