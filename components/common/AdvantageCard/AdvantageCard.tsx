import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { IAdvantageCardProps } from './AdvantageCard.props';

const AdvantageCard: FC<IAdvantageCardProps> = ({
  iconUrl,
  alt,
  title,
  description,
  color = 'white',
  className,
}) => {
  return (
    <li
      className={cn(
        'flex flex-col items-center rounded rounded-br-[60px] px-4 py-10 text-center shadow-primaryShadow md:w-[336px] md:px-10 xl:w-[384px]',
        {
          ['bg-blackBg text-white']: color === 'black',
          ['bg-white text-black xl:text-blackBg']: color === 'white',
          ['bg-blueBgGradient text-white']: color === 'gradient',
        },
        className
      )}
    >
      <Image className="md:h-16 md:w-16" src={iconUrl} width={48} height={48} alt={alt} />
      <h3
        className="relative mt-6 text-lg font-bold md:w-[200px] xl:w-[224px] xl:text-xl"
      >
        {title}
      </h3>
      <p className="mt-4 text-sm xl:text-base">{description}</p>
    </li>
  );
};

export default AdvantageCard;
