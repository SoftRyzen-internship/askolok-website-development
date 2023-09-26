import { FC } from 'react';
import Image from 'next/image';

import textJson from '@/public/materials/services.json';
import { navigationSection } from '@/utils/navigationSection';

import ServiceCard from '@/components/common/ServiceCard/ServiceCard';
import Title from '@/components/typography/Title/Title';
import Sections from '@/components/typography/Sections/Sections';

const ServiceSection: FC = () => {
  const { services } = textJson;

  return (
    <div id={navigationSection.service}>
      <Sections className="relative pb-16 md:pb-20 xl:pb-[108px]">
        <div className="container text-center">
          <Title tag="h2">Услуги и цены</Title>
          <ul className="my-6  flex flex-col gap-2 md:my-10 md:gap-3 xl:my-[60px] xl:gap-5">
            {services.map(({ service, price }) => (
              <ServiceCard key={service} service={service} price={price} />
            ))}
          </ul>
          <Image
            src="/images/footer/payLogos.png"
            alt="веб-платежи"
            width={1280}
            height={40}
            className="mx-auto h-auto w-full "
          />
        </div>
      </Sections>
    </div>
  );
};

export default ServiceSection;
