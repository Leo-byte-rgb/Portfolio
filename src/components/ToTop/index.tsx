import { box } from './style.module.scss';
import { AiOutlineArrowUp } from 'react-icons/ai';
const ToTop = () => {
  const pushToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button id={box} onClick={pushToTop}>
      <AiOutlineArrowUp />
    </button>
  );
};

export default ToTop;
