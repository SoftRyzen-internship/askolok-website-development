import { FC } from 'react';
import { Element } from 'react-scroll';

import { advantages } from '@/public/materials/advantages';
import { navigationSection } from '@/utils/navigationSection';

import Title from '@/components/typography/Title/Title';
import Sections from '@/components/typography/Sections/Sections';
import AdvantageCard from '@/components/common/AdvantageCard/AdvantageCard';

const AdvantagesSection: FC = () => {
  return (
    <Element name={navigationSection.advantages}>
      <Sections className="bg-blueBg ">
        <div className="container">
          <Title tag="h2" className="text-center">
            Преимущества
          </Title>

          <ul className="mt-6 flex flex-col gap-6 md:mt-10 md:flex-row md:flex-wrap md:justify-center md:gap-8 xl:mt-[60px]">
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
    </Element>
  );
};

export default AdvantagesSection;
