import { HTMLAttributes } from 'react';
import { textAreaUI } from './style.module.scss';
interface ITextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  name?: string;
}

const TextArea: React.FC<ITextAreaProps> = ({ ...props }) => (
  <textarea {...props} id={textAreaUI} />
);

export default TextArea;
