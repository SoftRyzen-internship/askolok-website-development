import { FC } from 'react';

import { IAdvantageCardProps } from './AdvantageCard.props';

const AdvantageCard: FC<IAdvantageCardProps> = ({ title, description }) => {
  return (
    <>
      <h3 className="relative mt-6 text-lg font-bold md:w-[200px] xl:w-[224px] xl:text-xl">
        {title}
      </h3>
      <p className="mt-4 text-sm xl:text-base">{description}</p>
    </>
  );
};

export default AdvantageCard;
