import { FC } from 'react';

import { IInputProps } from './Input.props';

const Input: FC<IInputProps> = ({ register, errorMessage, placeholder, type, children, label }) => {
  return (
    <label className="mb relative flex flex-col pb-4  md:pb-6">
      <span className="mb-2 text-[16px] leading-[0.95] md:mb-3 md:text-[18px]">
        {label}
        <span className="text-[#EA3324]">*</span>
      </span>
      <input
        {...register}
        placeholder={placeholder}
        className="h-[52px] rounded border border-blackBg p-3 "
        type={type}
      />
      {children}
      {errorMessage ? (
        <span className="absolute bottom-0 left-3 text-xs text-red-300 md:text-sm ">
          {errorMessage}
        </span>
      ) : null}
    </label>
  );
};

export default Input;
