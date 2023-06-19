import NextLink from 'next/link';
import Image from 'next/image';

import LogoProps from './LogoTypes';

function CompanyLogo(props: LogoProps) {
  const { tabWidth, footer } = props;
  return (
    <NextLink href="/" className="cursor-pointer">
      <div
        className={`relative h-[38px] w-[130px] ${
          tabWidth ? 'md:h-[66px] md:w-[232px]' : ''
        } md:h-[44px] md:w-[152px] xl:h-[66px] xl:w-[232px]`}
      >
        {footer ? (
          <Image src="/images/header/logoF.svg" alt="Логотип компанії" fill={true} />
        ) : (
          <Image src="/images/header/logoA.svg" alt="Логотип компанії" fill={true} />
        )}
      </div>
    </NextLink>
  );
}

export default CompanyLogo;
