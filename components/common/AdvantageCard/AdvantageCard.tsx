import { FC } from 'react';
import Image from 'next/image';

import { IAdvantageCardProps } from './AdvantageCard.props';

const AdvantageCard: FC<IAdvantageCardProps> = ({
  iconUrl,
  alt,
  title,
  description,
  color = 'white',
  className,
}) => {
  let bg, text;

  switch (color) {
    case 'black':
      bg = 'bg-blackBg';
      text = 'text-white';
      break;
    case 'white':
      bg = 'bg-white';
      text = 'text-black xl:text-blackBg';
      break;
    case 'gradient':
      bg = 'bg-blueBgGradient';
      text = 'text-white';
      break;

    default:
      bg = 'bg-blackBg';
      text = 'text-white';
      break;
  }

  return (
    <li
      className={`${bg} flex flex-col items-center rounded rounded-br-[60px] px-4 py-10 text-center shadow-primaryShadow md:w-[336px] md:px-10 xl:w-[384px] ${className}`}
    >
      <Image className="md:h-16 md:w-16" src={iconUrl} width={48} height={48} alt={alt} />
      <h3
        className={`${text} relative mt-6 text-lg font-bold md:w-[200px] xl:w-[224px] xl:text-xl`}
      >
        {title}
      </h3>
      <p className={`${text} mt-4 text-sm xl:text-base`}>{description}</p>
    </li>
  );
};

export default AdvantageCard;
