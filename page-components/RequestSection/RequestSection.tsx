import { FC, useState } from 'react';
import Image from 'next/image';
import { Element } from 'react-scroll';

import { navigationSection } from '@/utils/navigationSection';

import Sections from '@/components/typography/Sections/Sections';
import Button from '@/components/Button/Button';
import Modal from '@/components/modal/Modal';
import Form from '../Form/Form';

const RequestSection: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Element name={navigationSection.request}>
      <Sections className="bg-blueBg ">
        <div className="container xl:relative xl:pt-[86px]">
          <div className="w-full rounded-br-[60px] bg-blueBgGradient text-whiteBg shadow-primaryShadow xl:px-[104px] xl:py-10 smOnly:flex-col smOnly:items-center smOnly:px-4 smOnly:pt-4 mdOnly:justify-between mdOnly:pl-10 mdOnly:pr-5 mdOnly:pt-10 notXl:flex">
            <div className="smOnly:flex smOnly:flex-col smOnly:items-center">
              <h2 className=" text-2xl font-bold   md:text-[32px] md:leading-[1.1] smOnly:text-center">
                Оставляйте заявку
              </h2>
              <p className="mt-4 max-w-[454px] md:mt-5 md:text-[20px] md:leading-[1.5] xl:mt-6 smOnly:text-center">
                Свяжемся с вами в ближайшее время и обсудим все детали
              </p>
              <Button
                color="white"
                content="Заказать"
                type="button"
                rounded={false}
                className="mt-10 smOnly:w-full smOnly:min-w-[200px] smOnly:max-w-[280px]"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <div className="max-w-[242px]  md:max-w-[263px] xl:absolute xl:bottom-0 xl:right-[140px] xl:max-w-[392px] smOnly:mt-4 mdOnly:max-h-[252px]  ">
              <Image
                alt="фото Асколок Анастасии"
                src="/images/request/businesswoman.png"
                width={392}
                height={382}
                className="max-w-full smOnly:max-h-[228px] mdOnly:max-h-[252px]"
              />
            </div>
          </div>
        </div>
      </Sections>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} childrenName="Form">
        <Form />
      </Modal>
    </Element>
  );
};

export default RequestSection;
