import { HTMLAttributes } from 'react';
import { buttonUI, ldsElipsis } from './style.module.scss';
interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  loading: boolean;
  disabled: boolean;
}

const ButtonSubmit: React.FC<IButtonProps> = ({
  text,
  loading,
  disabled,
  ...props
}) => (
  <button {...props} id={buttonUI} disabled={disabled}>
    {loading ? (
      <div className={ldsElipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : (
      text
    )}
  </button>
);

export default ButtonSubmit;
