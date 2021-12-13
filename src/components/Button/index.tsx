import { HTMLAttributes, memo } from 'react';
import { buttonUI } from './style.module.scss';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  Icon?: React.ReactChild;
}

const Button = ({ text, Icon, ...rest }: IButtonProps) => (
  <button className={buttonUI} {...rest}>
    {text}
    {Icon ?? Icon}
  </button>
);

export default memo(Button);
