import { FC } from 'react';
import cn from 'classnames';

import { IButtonProps } from './Button.props';

const Button: FC<IButtonProps> = ({
  content,
  type = 'button',
  color = 'black',
  rounded = true,
  onClick,
  className,
}) => {
  return (
    <button
      className={cn(
        'min-w-[280px] px-5 py-[14px] text-lg font-bold',
        {
          [`relative z-[1] bg-blackBg text-white before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-br before:from-blueDark before:to-blueLight before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100 focus:before:opacity-100`]:
            color === 'black',
          [`bg-whiteBg text-black transition-all duration-300 hover:bg-blackBg hover:text-white focus:bg-blackBg focus:text-white xl:text-blackBg`]:
            color === 'white',
          [`relative z-[1] bg-gradient-to-br from-blueDark to-blueLight text-white before:absolute before:inset-0 before:z-[-1] before:bg-blackBg before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100 focus:before:opacity-100`]:
            color === 'gradient',
          ['rounded before:rounded']: rounded == true,
        },
        className
      )}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
};

export default Button;
