import { FC, useState } from 'react';

import Button from '@/components/Button/Button';
import Title from '@/components/typography/Title/Title';
import Modal from '@/components/modal/Modal';
import Form from '../Form/Form';

const HeroSection: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <> 
    <section className="herobg">
      <div className="bg-deco container bg-whiteBg pb-10 pt-[120px] md:pb-[208px] md:pt-[180px] xl:pb-[176px] xl:pt-[204px] smOnly:flex smOnly:flex-col smOnly:items-center">
        <Title tag="h1" className="w-[280px] md:w-[440px] xl:w-[502px]">
          Сайты под ключ <br />с уникальным веб-дизайном
        </Title>

        <p className="mt-4 w-[280px] text-base font-normal text-black md:mt-6 md:w-[405px] md:text-xl md:leading-normal xl:w-[488px] xl:text-2xl xl:leading-[1.33] xl:text-blackBg">
          Проекты высокого качества от 5 дней с адаптивным мобильным дизайном
        </p>
        <Button className="mt-[168px] md:mt-[60px] xl:mt-[72px]" type="button" content="Заказать"  onClick={() => setIsOpen(true)}/>
      </div>
    </section>
     <Modal isOpen={isOpen} setIsOpen={setIsOpen} childrenName="Form">
        <Form />
      </Modal>
      </>
   
  );
};

export default HeroSection;
