import { FC } from 'react';
import { Element } from 'react-scroll';

import { stageOfWorksText } from '@/public/materials/stageOfWorksText';
import { navigationSection } from '@/utils/navigationSection';

import Sections from '@/components/typography/Sections/Sections';
import Title from '@/components/typography/Title/Title';
import StageOfWorkList from '@/components/common/StageOfWork/StageOfWorkList/StageOfWorkList';

import NumberOneSvg from '@/public/images/stagesOfWork/numberOne.svg';
import NumberTwoSvg from '@/public/images/stagesOfWork/numberTwo.svg';
import NumberThreeSvg from '@/public/images/stagesOfWork/numberThree.svg';

const StagesOfWorkSection: FC = () => {
  const { columnOne, columnTwo, columnThree } = stageOfWorksText;
  return (
    <Element name={navigationSection.stageOfWork}>
      <Sections>
        <div className="container">
          <Title tag="h2" className="text-center">
            Этапы работы
          </Title>

          <ul className="mt-6 text-sm md:mt-10 md:grid md:grid-cols-3 md:gap-4 xl:mt-[60px] xl:gap-8 xl:text-base">
            <li className="flex flex-col gap-4 md:gap-6 xl:gap-10">
              <NumberOneSvg height={43} width={280} className="h-auto w-full " />
              <StageOfWorkList column={columnOne} />
            </li>
            <li className="flex flex-col gap-4 md:gap-6 xl:gap-10 smOnly:mt-6">
              <NumberTwoSvg height={43} width={280} className="h-auto w-full " />
              <StageOfWorkList column={columnTwo} color="black" />
            </li>
            <li className="flex flex-col gap-4 md:gap-6 xl:gap-10 smOnly:mt-6">
              <NumberThreeSvg height={43} width={280} className="h-auto w-full " />
              <StageOfWorkList column={columnThree} color="blue" />
            </li>
          </ul>
        </div>
      </Sections>
    </Element>
  );
};

export default StagesOfWorkSection;
