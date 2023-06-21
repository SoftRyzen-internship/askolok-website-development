import { IStageOfWorkItemProps } from './../StageOfWorkItem/StageOfWorkItem.props';

export interface IStageofWorkListProps {
  className?: string;
  color?: 'black' | 'blue';
  column: IStageOfWorkItemProps[];
}
