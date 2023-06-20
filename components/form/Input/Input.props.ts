import { UseFormRegisterReturn } from 'react-hook-form';

export interface IInputProps {
  errorMessage?: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  type?: string;
  children?: React.ReactNode;
  label?: string;
}
