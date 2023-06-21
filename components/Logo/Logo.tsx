import Link from 'next/link';
import Image from 'next/image';

import LogoProps from './Logo.props';
import { FC } from 'react';

const CompanyLogo: FC<LogoProps> = props => {
  const { tabWidth, footer } = props;
  return (
    <Link href="/" className="cursor-pointer">
      <div
        className={`relative h-[38px] w-[130px] ${
          tabWidth ? 'md:h-[66px] md:w-[232px]' : ''
        } md:h-[44px] md:w-[152px] xl:h-[66px] xl:w-[232px]`}
      >
        {footer ? (
          <Image src="/images/header/logoFooter.svg" alt="Логотип компании" fill={true} />
        ) : (
          <Image src="/images/header/logoHeader.svg" alt="Логотип компании" fill={true} />
        )}
      </div>
    </Link>
  );
};

export default CompanyLogo;
