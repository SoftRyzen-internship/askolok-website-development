import { FC } from 'react';

import { IServiceCardProps } from './ServiceCard.props';

const ServiceCard: FC<IServiceCardProps> = ({ service, price, className }) => {
  return (
    <li
      className={`flex overflow-hidden rounded border-[1px] border-[#ccc] md:h-[72px] xl:h-[76px] ${className}`}
    >
      <p className="flex w-4/5 items-center border-r-[1px] border-[#ccc] px-2 text-left text-sm font-medium text-black md:px-3 md:text-base xl:w-[85.47%] xl:px-6 xl:text-xl xl:text-blackBg smOnly:py-4 ">
        {service}
      </p>
      <span className="flex w-1/5 items-center justify-center bg-blueBg px-1 text-center text-base font-semibold text-[#1B2EB6] md:text-xl xl:w-[14.53%] xl:text-2xl">
        {price}
      </span>
    </li>
  );
};

export default ServiceCard;
