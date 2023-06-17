import { FC } from 'react';

import Sections from '@/components/typography/Sections/Sections';

import NumberOneSvg from '@/public/images/stagesOfWork/numberOne.svg';
import NumberTwoSvg from '@/public/images/stagesOfWork/numberTwo.svg';
import NumberThreeSvg from '@/public/images/stagesOfWork/numberThree.svg';

const StagesOfWorkSection: FC = () => {
  return (
    <Sections>
      <div className="container">
        <h2 className="text-center text-2xl font-bold md:text-[32px] md:leading-[1.13] xl:text-5xl">
          Этапы работы
        </h2>

        <ul className="mt-6 text-sm md:mt-10 md:grid md:grid-cols-3 md:gap-4 xl:mt-[60px] xl:gap-8 xl:text-base">
          <li className="flex flex-col gap-4 md:gap-6 xl:gap-10">
            <NumberOneSvg className=" w-full" />
            <ul className=" flex grow flex-col gap-2 px-[16px] py-[24px] shadow-primaryShadow xl:gap-3 xl:py-10 xl:pl-[45px] xl:pr-[45px]  smOnly:min-h-[192px]">
              <li className="flex gap-2">
                <span>&#8226;</span> <span>вы оставляете заявку на сайте</span>
              </li>
              <li className="flex gap-2">
                <span>&#8226;</span> <span>онлайн консультация</span>
              </li>
              <li className="flex gap-2">
                <span>&#8226;</span> <span>делаю анализ конкурентов</span>
              </li>
              <li className="flex gap-2">
                <span>&#8226;</span> <span>готовлю план по реализации проекта</span>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-4 md:gap-6 xl:gap-10  smOnly:mt-6">
            <NumberTwoSvg className=" w-full" />
            <ul className=" flex grow flex-col gap-2 bg-blackBg px-[16px] py-[24px] text-white shadow-primaryShadow xl:gap-3 xl:px-[20px] xl:py-[40px]  smOnly:min-h-[192px]">
              <li className="flex gap-2">
                <span>&#8226;</span> <span>согласовываем все детали</span>
              </li>
              <li className="flex gap-2">
                <span>&#8226;</span> <span>совместно заполняем бриф</span>
              </li>
              <li className="flex gap-2">
                <span>&#8226;</span> <span>делаю структуру</span>
              </li>
            </ul>
          </li>
          <li className="flex flex-col gap-4 md:gap-6 xl:gap-10 smOnly:mt-6">
            <NumberThreeSvg className=" w-full" />
            <ul className=" flex grow flex-col gap-2 bg-blueBgGradient px-[16px] py-[24px] text-white shadow-primaryShadow xl:gap-3 xl:px-[20px] xl:py-[40px] smOnly:min-h-[192px]">
              <li className="flex gap-2">
                <span>&#8226;</span> <span>начинаю делать дизайн проекта</span>
              </li>
              <li className="flex gap-2">
                <span>&#8226;</span> <span>создаю дизайн, вношу правки</span>
              </li>
              <li className="flex gap-2">
                <span>&#8226;</span> <span>разработка сайта</span>
              </li>
              <li className="flex gap-2">
                <span>&#8226;</span> <span>тестирую проект и сдаю заказчику</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Sections>
  );
};

export default StagesOfWorkSection;
