import { FC } from 'react';
import Image from 'next/image';

const RequestSection: FC = () => {
  return (
    <section id="submitApplication" className="py-10 md:py-[60px] xl:py-20">
      <div className="container xl:relative xl:pt-[86px]">
        <div className="w-full rounded-br-[60px] bg-blueBgGradient text-whiteBg shadow-primaryShadow xl:px-[104px] xl:py-10 smOnly:flex-col smOnly:items-center smOnly:px-4 smOnly:pt-4 mdOnly:justify-between mdOnly:pl-10 mdOnly:pr-5 mdOnly:pt-10 notXl:flex">
          <div className="smOnly:mb-4 smOnly:flex smOnly:flex-col smOnly:items-center">
            <h2 className="mb-4 text-2xl md:mb-5 md:text-[32px] md:leading-[1.1] xl:mb-6 smOnly:text-center">
              Оставляйте заявку
            </h2>
            <p className="mb-10 max-w-[454px] md:text-xl smOnly:text-center">
              Свяжемся с вами в ближайшее время и обсудим все детали
            </p>
            <button
              type="button"
              className="w-full max-w-[280px] bg-whiteBg p-[14px] text-lg font-bold text-black smOnly:mx-auto"
            >
              Заказать
            </button>
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
    </section>
  );
};

export default RequestSection;
