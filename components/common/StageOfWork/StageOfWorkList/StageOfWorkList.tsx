import { FC } from 'react';
import cn from 'classnames';

import StageOfWorkItem from '../StageOfWorkItem/StageOfWorkItem';

import { IStageofWorkListProps } from './StageOfWorkList.props';

const StageOfWorkList: FC<IStageofWorkListProps> = ({ color, column, className }) => {
  return (
    <ul
      className={cn(
        'flex grow flex-col gap-2 rounded px-[16px] py-[24px] shadow-primaryShadow xl:gap-3 xl:py-10 xl:pl-[45px] xl:pr-[45px]  smOnly:min-h-[192px]',
        {
          ['bg-blackBg text-white']: color === 'black',
          ['bg-blueBgGradient text-white']: color === 'blue',
        },
        className
      )}
    >
      {column.map((item, index) => (
        <StageOfWorkItem text={item.text} key={index} />
      ))}
    </ul>
  );
};

export default StageOfWorkList;
