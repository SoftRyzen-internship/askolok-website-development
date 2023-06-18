import { FC } from 'react';

import { IStageOfWorkItemProps } from './StageOfWorkItem.props';

const StageOfWorkItem: FC<IStageOfWorkItemProps> = ({ text }) => {
  return (
    <li className="flex gap-2">
      <span>&#8226;</span> <span>{text}</span>
    </li>
  );
};

export default StageOfWorkItem;
