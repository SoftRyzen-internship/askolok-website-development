import { FC } from 'react';
import cn from 'classnames';

import { ITitle } from './Title.props';

const Title: FC<ITitle> = ({ children, className, tag = 'h2' }) => {
  const Tag = tag;
  return (
    <Tag
      className={cn(
        {
          ['text-[32px] font-extrabold leading-10  md:text-[44px] xl:text-7xl']: tag == 'h1',
          [' text-2xl font-semibold md:text-[32px] md:leading-snug xl:text-[40px] xl:leading-[1.4]']:
            tag == 'h2',
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Title;
