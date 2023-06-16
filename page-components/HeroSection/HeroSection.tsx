import Button from '@/components/Button/Button';
import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <section className="herobg">
      <div className="bg-deco container bg-whiteBg pb-10 pt-[120px] md:pb-[208px] md:pt-[180px] xl:pb-[176px] xl:pt-[204px]">
        <h1 className="w-[280px] text-2xl font-bold text-black md:w-[440px] md:text-5xl md:leading-tight xl:w-[502px] xl:text-[56px] xl:leading-[1.2] xl:text-blackBg">
          Сайты под ключ <br />с уникальным веб-дизайном
        </h1>
        <p className="mt-4 w-[280px] text-base font-normal text-black md:mt-6 md:w-[405px] md:text-xl md:leading-normal xl:w-[488px] xl:text-2xl xl:leading-[1.33] xl:text-blackBg">
          Проекты высокого качества от 5 дней с адаптивным мобильным дизайном
        </p>
        <Button className="mt-[168px] md:mt-[60px] xl:mt-[72px]" content="Заказать" />
      </div>
    </section>
  );
};

export default HeroSection;
