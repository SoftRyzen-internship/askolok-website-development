export interface IButtonProps {
  content: string;
  type: 'button' | 'submit';
  color?: 'black' | 'white' | 'gradient';
  rounded?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}
