import { FC } from 'react';
import { Link, scroller } from 'react-scroll';

import navigation from './navigation';
import ownerData from './ownerData';

import CompanyLogo from '@/components/Logo/Logo';
import LinkModal from '@/components/LinkModal/LinkModal';
import Policy from '@/page-components/Policy/Policy';
import PublicContract from '@/page-components/PublicContract/PublicContract';

import { IFooterProps } from './Footer.props';

const Footer: FC<IFooterProps> = ({ headerHeight }) => {
  const handleClick = (element: string) => {
    if (element) {
      scroller.scrollTo(element, {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <footer className="relative bg-blackBg pt-[40px] text-whiteBg xl:pt-[60px]">
      <div className="container relative flex flex-col md:flex md:flex-row">
        {/* logo and schedule */}
        <div className="flex items-center justify-center gap-6 sm:justify-between md:mr-[84px] md:flex-col md:content-start md:items-start md:justify-start md:gap-5 xl:mr-[180px] xl:gap-10 ">
          <CompanyLogo footer />
          <span className="text-xs sm:w-[200px] md:w-auto md:text-sm xl:text-base">
            Режим работы: <br /> ПН-СБ 09:00-18:00
          </span>
        </div>

        {/* Nav */}
        <div className="mt-6 flex justify-between sm:w-[430px] md:mt-0 md:w-auto md:content-start md:justify-end">
          <nav>
            <ul className="flex flex-col flex-nowrap gap-x-6 gap-y-6 text-xs md:content-start md:gap-x-[67px] md:gap-y-2 md:text-sm xl:mr-[170px] xl:grid-cols-1 xl:gap-5 xl:text-base">
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
                    href=""
                    to={item.href}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-headerHeight}
                    key={item.id}
                    className={`cursor-pointer py-2`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* policy contract */}
        <ul className="my-6 mr-auto flex flex-col items-start gap-5 md:absolute md:bottom-0 md:my-2 md:flex-row-reverse md:gap-[80px] xl:static xl:mr-0 xl:mt-0 xl:flex-col xl:gap-[20px]">
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

        {/* owner's info */}
        <div className="flex flex-col pb-2 sm:absolute sm:right-5 sm:top-[62px] sm:max-w-[200px] md:static md:ml-auto md:max-w-max">
          <p className="text-[10px] leading-4 md:text-[10px] md:leading-5 xl:text-base">
            {ownerData.authNumber}
          </p>
          <p className="text-[10px] leading-4 md:max-w-[260px] md:text-[10px] md:leading-5 xl:text-base">
            {ownerData.authAddress}
          </p>
          <p className="text-[10px] leading-4 md:text-[10px] md:leading-5 xl:text-base">
            {ownerData.name}
          </p>
          <p className="text-[10px] leading-4 md:max-w-[260px] md:text-[10px] md:leading-5 xl:text-base">
            {ownerData.address}
          </p>
          <a
            href="mailto:nasya100@gmail.com"
            className="text-[10px] leading-4 md:text-[10px] md:leading-5 xl:text-base"
          >
            {ownerData.email}
          </a>
          <a
            href="tel:+375292597366"
            className="text-[10px] leading-4 md:text-[10px] md:leading-5 xl:text-base"
          >
            {ownerData.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-t-[#3D3D3D] py-3 md:mt-0 md:py-5">
        <p className="mx-auto w-[141px] text-center text-[10px] leading-[1.2] text-[#CECECE] md:w-auto md:text-[12px] md:leading-[1.33] xl:leading-[1.17]">
          Анастасия Асколок © 2023 Все права защищены
        </p>
      </div>
    </footer>
  );
};

export default Footer;
