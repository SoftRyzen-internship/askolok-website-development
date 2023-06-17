import { Disclosure } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { Link, scroller } from 'react-scroll';

import CloseIcon from '@/public/images/header/CloseIcon.svg';
import MenuIcon from '@/public/images/header/icon-menu.svg';
import CompanyLogo from '../../components/Logo/Logo';
import navigation from './navigation';
import css from './Header.module.css';

function Header() {
  const [headerBackground, setHeaderBackground] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 0) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleClick = (element: string) => {
    if (element) {
      scroller.scrollTo(element, {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 ${
        headerBackground ? 'bg-whiteBg' : 'bg-transparent'
      }`}
    >
      <Disclosure as="nav" className="container">
        {({ open }) => (
          <>
            <div
              className={`${
                open && 'hidden'
              } flex items-center justify-between py-[21px] md:py-8 xl:py-6`}
            >
              <div className="flex items-center">
                <CompanyLogo />
                <div className="hidden xl:block">
                  <ul className="ml-[250px] flex flex-nowrap items-baseline space-x-[72px]">
                    {navigation.map(item => (
                      <li
                        key={item.id}
                        onKeyUp={event => {
                          if (event.key === 'Enter') {
                            handleClick(item.href);
                          }
                        }}
                      >
                        <Link
                          activeClass={css.active}
                          tabIndex={0}
                          to={item.href}
                          spy={true}
                          smooth={true}
                          duration={500}
                          key={item.id}
                          className={`cursor-pointer py-2 text-blackBg`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="-mr-1 flex xl:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center">
                  <span className="sr-only">Open main menu</span>
                  {!open && (
                    <MenuIcon
                      width={32}
                      height={32}
                      className="block h-8 w-8 md:h-12 md:w-12"
                      aria-label="Open mobile menu"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <Disclosure.Panel
              className={`absolute left-0 right-0 top-full z-20 h-screen w-screen overflow-hidden overflow-y-auto bg-blueBg pt-[60px] xl:hidden ${
                open ? '' : 'hidden'
              }`}
            >
              {({ open, close }) => (
                <div className="container relative flex w-screen flex-col items-center">
                  <div className="flex xl:hidden">
                    <Disclosure.Button className="absolute bottom-[100%] right-8 z-20">
                      <span className="sr-only">Open main menu</span>
                      {open && (
                        <CloseIcon
                          width={24}
                          height={24}
                          className="block h-8 w-8 md:h-8 md:w-8"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <CompanyLogo tabWidth />
                  <ul className="mt-[60px] flex flex-col items-center justify-center space-y-10 md:mt-20 md:space-y-16">
                    {navigation.map(item => (
                      <li
                        key={item.id}
                        onKeyUp={event => {
                          if (event.key === 'Enter') {
                            handleClick(item.href);
                            close();
                          }
                        }}
                      >
                        <Link
                          key={item.name}
                          to={item.href}
                          tabIndex={0}
                          onClick={() => {
                            handleClick(item.href);
                            if (open) {
                              setTimeout(() => {
                                close();
                              }, 0);
                            }
                          }}
                          className="block cursor-pointer text-[20px] leading-[1.2] text-blackBg md:text-[32px]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}

export default Header;
