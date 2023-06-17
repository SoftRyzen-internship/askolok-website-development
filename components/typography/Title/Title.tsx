import { FC } from 'react';
import cn from 'classnames';

import { ITitle } from './Title.props';

const Title: FC<ITitle> = ({ children, className, tag = 'h2' }) => {
  const Tag = tag;
  return (
    <Tag
      className={cn(
        {
          ['text-2xl font-bold text-black  md:text-5xl md:leading-tight xl:text-[56px] xl:leading-[1.2] xl:text-blackBg']:
            tag == 'h1',
          ['text-2xl font-bold text-black md:text-[32px] md:leading-[1.13] xl:text-5xl xl:text-blackBg']:
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
