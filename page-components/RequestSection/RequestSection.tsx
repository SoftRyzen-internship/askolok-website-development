import { FC } from 'react';
import Image from 'next/image';

import Sections from '@/components/typography/Sections/Sections';
import Button from '@/components/Button/Button';

const RequestSection: FC = () => {
  return (
    <Sections>
      <div className="container xl:relative xl:pt-[86px]">
        <div className="w-full rounded-br-[60px] bg-blueBgGradient text-whiteBg shadow-primaryShadow xl:px-[104px] xl:py-10 smOnly:flex-col smOnly:items-center smOnly:px-4 smOnly:pt-4 mdOnly:justify-between mdOnly:pl-10 mdOnly:pr-5 mdOnly:pt-10 notXl:flex">
          <div className="smOnly:mb-4 smOnly:flex smOnly:flex-col smOnly:items-center">
            <h2 className="mb-4 text-2xl font-bold  md:mb-5 md:text-[32px] md:leading-[1.1] xl:mb-6 smOnly:text-center">
              Оставляйте заявку
            </h2>
            <p className="mb-10 max-w-[454px] md:text-[20px] md:leading-[1.5] smOnly:text-center">
              Свяжемся с вами в ближайшее время и обсудим все детали
            </p>
            <Button color="white" content="Заказать" type="button" rounded={false} />
          </div>
          <div className="max-w-[242px] md:max-w-[263px] xl:absolute xl:bottom-0 xl:right-[140px] xl:max-w-[392px] mdOnly:max-h-[252px]  ">
            <Image
              alt="фото Асколок Акастасии"
              src="/images/request/businesswoman.png"
              width={392}
              height={382}
              className="max-w-full smOnly:max-h-[228px] mdOnly:max-h-[252px]"
            />
          </div>
        </div>
      </div>
    </Sections>
  );
};

export default RequestSection;
