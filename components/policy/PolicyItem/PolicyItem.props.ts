export interface IPolicyNotesItem {
  marker: string;
  text: string;
}

export interface IPolicySubtitleItem {
  marker: string;
  text: string;
  notes?: IPolicyNotesItem[];
}

export interface IPolicyItemProps {
  subtitle: IPolicySubtitleItem;
}
