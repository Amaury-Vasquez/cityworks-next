import { FC } from 'react';
import Image from 'next/image';

interface AvatarProps {
  name: string;
  imgUrl: string;
}

export const Avatar: FC<AvatarProps> = ({ name, imgUrl }) => (
  <div className="flex flex-col w-full space-y-2 items-center">
    <div className="avatar">
      <div className="w-28 rounded-full">
        <Image src={imgUrl} alt="avatar image" width={100} height={100} />
      </div>
    </div>
    <span className="text-primary text-center text-lg font-semibold">
      {name}
    </span>
  </div>
);
