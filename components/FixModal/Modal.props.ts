export interface IModalsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  childrenName: 'Form' | 'Policy' | 'PublicContract';
}
