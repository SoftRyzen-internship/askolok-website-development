import { FC } from 'react';

import { IButtonProps } from './types';

const Button: FC<IButtonProps> = ({
  content,
  type = 'button',
  color = 'black',
  rounded = true,
  className,
}) => {
  let colors;
  switch (color) {
    case 'black':
      colors = `relative z-[1] bg-blackBg text-white before:bg-gradient-to-br before:from-blueDark before:to-blueLight before:absolute before:inset-0 before:z-[-1] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100 focus:before:opacity-100`;
      break;
    case 'white':
      colors =
        'bg-whiteBg text-black hover:bg-blackBg hover:text-white focus:bg-blackBg focus:text-white transition-all duration-300';
      break;
    case 'gradient':
      colors = `relative z-[1] bg-gradient-to-br from-blueDark to-blueLight text-white before:bg-blackBg before:absolute before:inset-0 before:z-[-1] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100 focus:before:opacity-100`;
      break;

    default:
      break;
  }
  const frame = `${rounded ? 'rounded before:rounded' : ''} }`;
  const classes = `${colors} ${frame} min-w-[280px] px-5 py-[14px] text-lg font-bold  ${className}`;
  return (
    <button className={classes} type={type}>
      {content}
    </button>
  );
};

export default Button;
