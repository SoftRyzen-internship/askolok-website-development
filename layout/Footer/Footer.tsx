import { Link, scroller } from 'react-scroll';
import Image from 'next/image';

import navigation from './navigation';

import CompanyLogo from '../../components/Logo/Logo';
import LinkModal from '@/components/LinkModal/LinkModal';
import Policy from '@/page-components/Policy/Policy';
import PublicContract from '@/page-components/PublicContract/PublicContract';

function Footer() {
  const handleClick = (element: string) => {
    if (element) {
      scroller.scrollTo(element, {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <footer className="bg-blackBg pt-[40px] text-whiteBg xl:pt-[60px]">
      <div className="xl:item-center container relative flex flex-col md:flex md:flex-row">
        {/* logo */}
        <div className="flex items-center justify-center md:mr-[31px] md:content-start md:items-start xl:mr-[180px] ">
          <CompanyLogo footer />
        </div>

        {/* Nav */}
        <div className="mt-6 flex justify-between sm:w-[430px] md:mt-0 md:w-auto md:content-start md:justify-end">
          <ul className="flex flex-col flex-nowrap gap-x-6 gap-y-6 text-xs md:mr-16 md:grid md:grid-cols-2 md:content-start md:gap-x-[67px] md:gap-y-4 md:text-sm xl:mr-[170px] xl:grid-cols-1 xl:gap-5 xl:text-base">
            {navigation.map(item => (
              <li
                className="w-[110px] flex-nowrap hover:font-semibold hover:underline md:w-[124px] xl:w-[141px]"
                key={item.id}
                onClick={() => {
                  handleClick(item.href);
                }}
                onKeyUp={event => {
                  if (event.key === 'Enter') {
                    handleClick(item.href);
                  }
                }}
              >
                <Link
                  tabIndex={0}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  key={item.id}
                  className={`cursor-pointer py-2`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* email image */}
          <div className="md:mb-10 xl:mb-[66px]">
            <div className="flex flex-col">
              <p className="text-xs md:text-sm xl:text-base">askolok@gmail.com</p>
            </div>

            <div
              className={`relative mt-6 h-[72px] w-[132px] md:mt-4 md:h-[82px] md:w-[152px] xl:mt-8 xl:h-[96px] xl:w-[176px]`}
            >
              <Image
                src="/images/footer/imagePay.jpg"
                alt="веб-платежи"
                className="rounded"
                fill={true}
                sizes="30vw"
              />
            </div>
          </div>
        </div>

        {/* policy contract */}
        <ul className="mr-auto mt-6 flex flex-col items-start gap-5 md:absolute md:bottom-10 md:flex-row-reverse md:gap-[80px] xl:static xl:ml-auto xl:mr-0 xl:mt-0 xl:flex-col xl:gap-[20px]">
          <li>
            <LinkModal childrenName="Policy" text="Политика конфиденциальности">
              <Policy />
            </LinkModal>
          </li>
          <li>
            <LinkModal childrenName="PublicContract" text="Договор оферты">
              <PublicContract />
            </LinkModal>
          </li>
        </ul>
      </div>

      <div className="mt-10 border-t border-t-[#3D3D3D] py-3 md:mt-0 md:py-5">
        <p className="mx-auto w-[141px] text-center text-[10px] leading-[1.2] text-[#CECECE] md:w-auto md:text-[12px] md:leading-[1.33] xl:leading-[1.17]">
          Анастасия Асколок © 2023 Все права защищены
        </p>
      </div>
    </footer>
  );
}

export default Footer;
