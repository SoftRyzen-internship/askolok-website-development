import { FC } from 'react';
import Link from 'next/link';

import textJson from '@/public/materials/services.json';
import { navigationSection } from '@/utils/navigationSection';

import ServiceCard from '@/components/common/ServiceCard/ServiceCard';
import Title from '@/components/typography/Title/Title';
import Sections from '@/components/typography/Sections/Sections';

const ServiceSection: FC = () => {
  const { services } = textJson;

  return (
    <div id={navigationSection.service}>
      <Sections>
        <div className="container text-center">
          <Title tag="h2">Услуги и цены</Title>
          <ul className="mt-6 flex flex-col gap-2 md:mt-10 md:gap-3 xl:mt-[60px] xl:gap-5">
            {services.map(({ service, price }) => (
              <ServiceCard key={service} service={service} price={price} />
            ))}
          </ul>
        </div>
      </Sections>
    </div>
  );
};

export default ServiceSection;
