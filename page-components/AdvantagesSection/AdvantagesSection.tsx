import { FC } from 'react';
import { Element } from 'react-scroll';

import textJson from '@/public/materials/advantages.json';
import { navigationSection } from '@/utils/navigationSection';

import Title from '@/components/typography/Title/Title';
import Sections from '@/components/typography/Sections/Sections';
import AdvantageCard from '@/components/common/AdvantageCard/AdvantageCard';

import PcSvg from '@/public/images/advantages/pc.svg';
import GearSvg from '@/public/images/advantages/gear.svg';
import LockSvg from '@/public/images/advantages/lock.svg';

const AdvantagesSection: FC = () => {
  const [card1, card2, card3] = textJson.advantages;

  return (
    <Element name={navigationSection.advantages}>
      <Sections className="bg-blueBg ">
        <div className="container">
          <Title tag="h2" className="text-center">
            Преимущества
          </Title>
          <ul className="mt-6 flex flex-col gap-6 md:mt-10 md:flex-row md:flex-wrap md:justify-center md:gap-8 xl:mt-[60px]">
            <li className="advantage-card bg-blueBgGradient text-white">
              <PcSvg width={48} height={48} className="md:h-16 md:w-16" />
              <AdvantageCard title={card1.title} description={card1.description} />
            </li>
            <li className="advantage-card bg-blackBg text-white">
              <GearSvg width={48} height={48} className="md:h-16 md:w-16" />
              <AdvantageCard title={card2.title} description={card2.description} />
            </li>
            <li className="advantage-card bg-white text-black xl:text-blackBg">
              <LockSvg width={48} height={48} className="md:h-16 md:w-16" />
              <AdvantageCard title={card3.title} description={card3.description} />
            </li>
          </ul>
        </div>
      </Sections>
    </Element>
  );
};

export default AdvantagesSection;
