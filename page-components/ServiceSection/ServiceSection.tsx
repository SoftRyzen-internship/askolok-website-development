import { FC } from 'react';

import ServiceCard from '@/components/common/ServiceCard/ServiceCard';
import Title from '@/components/typography/Title/Title';

import { services } from '@/public/materials/services';
import Link from 'next/link';

const ServiceSection: FC = () => {
  return (
    <section>
      <div className="container py-10 text-center md:py-[60px] xl:pb-20 xl:pt-[76px]">
        <Title tag="h2">Услуги и цены</Title>
        <ul className="mt-6 flex flex-col gap-2 md:mt-10 md:gap-3 xl:mt-[60px] xl:gap-5">
          {services.map(({ service, price }) => (
            <ServiceCard key={service} service={service} price={price} />
          ))}
        </ul>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="relative z-[1] mt-6 inline-block min-w-[280px] rounded bg-blackBg px-5 py-[14px] text-lg font-bold text-white before:absolute before:inset-0 before:z-[-1] before:rounded before:bg-gradient-to-br before:from-blueDark before:to-blueLight before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100 focus:before:opacity-100 md:mt-10"
        >
          Оплатить
        </Link>
      </div>
    </section>
  );
};

export default ServiceSection;
