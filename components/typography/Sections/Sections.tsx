import { FC } from 'react';
import cn from 'classnames';

import { ISections } from './Section.props';

const Sections: FC<ISections> = ({ className, children }) => {
  return (
    <section className={cn('pb-10 pt-10 md:pb-[60px] md:pt-[60px]  xl:py-20 xl:pb-20', className)}>
      {children}
    </section>
  );
};

export default Sections;
