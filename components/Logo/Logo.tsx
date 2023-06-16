import NextLink from 'next/link';

import LogoA from '@/public/logoA.svg';

// import Logo from '@/public/assets/icon/logo.svg';
// import LogoM from '@/public/assets/icon/logoM.svg';

function CompanyLogo() {
  // const { less768px } = useBreakpoints();

  return (
    <NextLink href="/" className="cursor-pointer">
      <LogoA
        aria-label="Логотип компанії"
        className="hover:inherit focus:inherit mx-auto fill-inherit"
      />

      {/* <Logo
          aria-label="Логотип компанії"
          className="hover:inherit focus:inherit mx-auto fill-inherit"
        /> */}

      {/* <p
        className={`font-tanPearl mx-auto max-w-[44px] text-[12px] uppercase md:max-w-[85px] md:text-[24px] md:leading-8`}
      >       
      </p> */}
    </NextLink>
  );
}

export default CompanyLogo;
