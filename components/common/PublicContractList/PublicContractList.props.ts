export interface IPublicContractItem {
  text: string;
  subtext?: string[];
  aftertext?: string;
}

export interface IPublicContractSection {
  title: string;
  subtitle: IPublicContractItem[];
}

export interface IPublicContractProps {
  sections: IPublicContractSection[];
}
