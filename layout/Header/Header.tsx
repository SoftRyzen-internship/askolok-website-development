import { Disclosure } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { Link, scroller } from 'react-scroll';

import navigation from './navigation';

import CompanyLogo from '../../components/Logo/Logo';

import CloseIcon from '@/public/images/header/CloseIcon.svg';
import MenuIcon from '@/public/images/header/icon-menu.svg';

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
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-1000 ${
        headerBackground ? 'bg-whiteBg/90 ' : 'bg-transparent'
      }`}
    >
      <div className="container">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className={`${open && 'hidden'} py-[21px] md:py-8 xl:py-6`}>
                <div className="flex items-center justify-between">
                  <CompanyLogo />
                  <div className="hidden xl:flex">
                    <ul className="flex flex-nowrap gap-[72px]">
                      {navigation.map((item, index) => (
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
                            offset={-80}
                            smooth={true}
                            duration={500}
                            key={item.id}
                            className={`relative cursor-pointer py-4 text-blackBg ${
                              headerBackground
                                ? 'text - blackBg'
                                : index > 1
                                ? 'text-white'
                                : 'text-blackBg'
                            } before:absolute before:bottom-[16px] before:block before:w-full before:border-b before:border-transparent before:transition-all before:duration-300 hover:before:border-current`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="-mr-1 flex xl:hidden">
                    <Disclosure.Button
                      className={`inline-flex items-center justify-center transition-all duration-300 ${
                        headerBackground ? 'text-blackBg' : 'mdOnly:text-white'
                      } `}
                    >
                      <span className="sr-only ">Open main menu</span>
                      {!open && (
                        <MenuIcon
                          width={32}
                          height={32}
                          className="block h-8 w-8 text-current md:h-12 md:w-12"
                          aria-label="Открыть мобильное меню"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
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
                    <ul className="mt-[60px] flex flex-col items-center justify-center gap-10 pb-10 md:mt-20 md:gap-16">
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
                            className="block cursor-pointer text-[20px] leading-[1.2] text-blackBg hover:underline hover:sm:underline-offset-4 md:text-[32px] hover:md:underline-offset-8"
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
      </div>
    </header>
  );
}

export default Header;
