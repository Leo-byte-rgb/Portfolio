import { useContext } from 'react';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HeightContext } from '../../Contexts/heigths';

import { button, menu, opened, closed, selected } from './style.module.scss';

type TypeProps = 'home' | 'about' | 'resume' | 'contact';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { state, position } = useContext(HeightContext);

  const handleMenu = () => setOpen(!open);

  const handleScroll = (event: any) => {
    const type: TypeProps = event.target.id;
    window.scrollTo({
      top: state[type],
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button id={button} onClick={handleMenu}>
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <menu id={menu} className={open ? opened : closed}>
        <ol>
          <li
            onClick={handleScroll}
            id='home'
            className={position < state.about ? selected : ''}
          >
            Início
          </li>
          <li
            onClick={handleScroll}
            id='about'
            className={
              position >= state.about && position < state.resume ? selected : ''
            }
          >
            Sobre
          </li>
          <li
            onClick={handleScroll}
            id='resume'
            className={
              position >= state.resume && position <= state.contact - 101
                ? selected
                : ''
            }
          >
            Credênciais
          </li>
          <li
            onClick={handleScroll}
            id='contact'
            className={position > state.contact - 100 ? selected : ''}
          >
            {' '}
            Contato
          </li>
        </ol>
      </menu>
    </>
  );
};

export default Menu;
