import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IInputProps {
  errorMessage?: string;
  register: UseFormRegisterReturn;
  placeholder?: string;
  type?: string;
  children?: React.ReactNode;
  label?: string;
}

const Input: FC<IInputProps> = ({ register, errorMessage, placeholder, type, children, label }) => {
  return (
    <label className="flex flex-col">
      {label}
      <input {...register} placeholder={placeholder} className="" type={type} />
      {children}
      {errorMessage ? <span className="">{errorMessage}</span> : null}
    </label>
  );
};

export default Input;
