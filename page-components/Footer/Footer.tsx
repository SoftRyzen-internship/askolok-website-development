import { Link, scroller } from 'react-scroll';
import CompanyLogo from '../../components/Logo/Logo';

import navigation from './navigation';
import Image from 'next/image';
import footerTextContent from './footer-text-content';

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
    <footer className=" bg-blackBg text-whiteBg xl:pt-[60px]">
      <div className="container flex">
        {/* logo */}
        <div>
          <CompanyLogo />
        </div>

        {/* Nav */}

        <ul className="flex flex-col items-center justify-center text-sm">
          {navigation.map(item => (
            <li
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
                key={item.id}
                className={`cursor-pointer py-2`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* email image */}
        <div>
          <div className="flex flex-col">
            <p className="mb-2 w-[180px] text-sm">askolok@gmail.com</p>
          </div>

          <div
            className={`relative h-[72px] w-[132px] md:h-[82px] md:w-[152px] xl:h-[96px] xl:w-[176px]`}
          >
            <Image src="/images/footer/imagePay.jpg" alt="веб-платежи" fill={true} />
          </div>
        </div>

        {/* policy contract */}
        <ul className="flex flex-col">
          {footerTextContent.map(item => (
            <li
              key={item.id}
              onClick={() => {}}
              onKeyUp={event => {
                if (event.key === 'Enter') {
                }
              }}
            >
              <button type="button" className={`cursor-pointer py-2`}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t-color: #3D3D3D border-t  pb-5">
        <p className="mt-5 text-center text-[10px] leading-[1.2] md:text-[12px] md:leading-[1.33] xl:leading-[1.17]">
          Анастасия Асколок © 2023 Все права защищены
        </p>
      </div>
    </footer>
  );
}

export default Footer;
