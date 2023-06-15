import { Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link, scroller } from 'react-scroll';

// import Image from 'next/image';
import CompanyLogo from '../../components/Logo/Logo';
import navigation from './navigation';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };

  const handleClick = (element: string) => {
    if (element) {
      setMobileMenuOpen(false);
      scroller.scrollTo(element, {
        duration: 500,
        smooth: true,
      });
    }
  };

  useEffect(() => {
    mobileMenuOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [mobileMenuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      <div className="">
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
                    <ul className="ml-[260px] flex items-baseline space-x-[72px]">
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
                            activeClass="active"
                            tabIndex={0}
                            to={item.href}
                            spy={true}
                            smooth={true}
                            duration={500}
                            key={item.id}
                            onSetActive={handleSetActive}
                            className={`${
                              activeLink === item.name ? 'font-semibold underline' : ''
                            } cursor-pointer py-2 text-blackBg`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="-mr-1 flex xl:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button
                    onClick={() => {
                      if (open) {
                        setMobileMenuOpen(false);
                      } else {
                        setMobileMenuOpen(true);
                      }
                    }}
                    className="inline-flex items-center justify-center p-2"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!open && (
                      <Bars3BottomLeftIcon
                        width={48}
                        height={48}
                        className="block h-8 w-8 md:h-12 md:w-12"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              <Disclosure.Panel
                className={`absolute left-0 right-0 top-full z-20 w-screen overflow-y-auto bg-blueBg bg-center pb-[300px] pt-[80px] md:pb-[210px] md:pt-[60px] xl:hidden ${
                  open ? '' : 'hidden'
                }`}
              >
                {({ open, close }) => (
                  <div className="container relative flex w-screen flex-col items-center">
                    <div className="-mr-1 flex xl:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button
                        onClick={() => {
                          if (open) {
                            setMobileMenuOpen(false);
                          } else {
                            setMobileMenuOpen(true);
                          }
                        }}
                        className="absolute bottom-[91%] right-0 z-20 p-8"
                      >
                        <span className="sr-only">Open main menu</span>
                        {open && (
                          <XMarkIcon
                            width={24}
                            height={24}
                            className="block h-8 w-8 md:h-8 md:w-8"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <CompanyLogo />
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
                                setMobileMenuOpen(false);
                                setTimeout(() => {
                                  close();
                                }, 0);
                              } else {
                                setMobileMenuOpen(true);
                              }
                            }}
                            className="block cursor-pointer text-[20px] leading-[1.2] text-blackBg md:text-[32px]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {/* <div>
                      <Image
                        className="h-[307px] w-[280px] md:h-[368px] md:w-[336px]"
                        src={mainImage}
                        alt="Святковий пиріг зі свечами"
                        width={488}
                        height={543}
                      />
                    </div> */}
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
