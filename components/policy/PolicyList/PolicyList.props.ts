import { IPolicySubtitleItem } from '../PolicyItem/PolicyItem.props';

export interface IPolicySection {
  title: string;
  subtitles: IPolicySubtitleItem[];
}

export interface IPolicyListProps {
  sections: IPolicySection[];
}
