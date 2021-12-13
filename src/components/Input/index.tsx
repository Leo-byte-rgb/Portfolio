import { HTMLAttributes } from 'react';
import { inputUI } from './style.module.scss';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  name?: string;
}

const Input: React.FC<IInputProps> = ({ ...props }) => (
  <input {...props} id={inputUI} />
);

export default Input;
