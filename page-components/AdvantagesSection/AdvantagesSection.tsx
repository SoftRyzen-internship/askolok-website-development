import { FC } from 'react';

import { advantages } from '@/public/materials/advantages';

import Sections from '@/components/typography/Sections/Sections';
import AdvantageCard from '@/components/common/AdvantageCard/AdvantageCard';

const AdvantagesSection: FC = () => {
  return (
    <Sections className="bg-blueBg ">
      <div className="container">
        <h2 className="text-center text-2xl font-bold text-black md:text-[32px] md:leading-[1.125] xl:text-5xl xl:leading-tight xl:text-blackBg">
          Преимущества
        </h2>
        <ul className="flex flex-col gap-6 mt-6 md:flex-row md:flex-wrap md:justify-center md:gap-8">
          {advantages.map(({ iconUrl, alt, title, description, color }) => (
            <AdvantageCard
              key={title}
              iconUrl={iconUrl}
              alt={alt}
              title={title}
              description={description}
              color={color}
            />
          ))}
        </ul>
      </div>
    </Sections>
  );
};

export default AdvantagesSection;
