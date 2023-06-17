export interface IPublicContractItem {
  text: string;
}

export interface IPublicContractSection {
  title: string;
  subtitle: IPublicContractItem[];
}

export interface IPublicContractProps {
  sections: IPublicContractSection[];
}
