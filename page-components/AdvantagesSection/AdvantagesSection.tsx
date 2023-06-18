import { FC } from 'react';

import AdvantageCard from '@/components/AdvantageCard/AdvantageCard';
import { advantages } from '@/public/materials/advantages';

const AdvantagesSection: FC = () => {
  return (
    <section className="bg-blueBg py-10 md:py-[60px] xl:py-[80px] ">
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
    </section>
  );
};

export default AdvantagesSection;
