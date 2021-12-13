import Button from '../../components/Button';
import {
  AiOutlineCaretDown,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from 'react-icons/ai';
import { container, landing, infos } from './style.module.scss';
import { memo, useEffect, useRef, useState } from 'react';

const Landing = () => {
  const [offset, setOffset] = useState(0);
  const landingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOffset(landingRef?.current?.offsetHeight ?? 0);
  }, []);

  const scrollTo = () => window.scrollTo({ top: offset, behavior: 'smooth' });

  return (
    <div id={container} ref={landingRef}>
      <section id={landing}>
        <h1>Leonardo Agostini Costa</h1>
        <div id={infos}>
          <span>FRONT-END DEVELOPER</span>
          <span>CHAPECÓ - SC</span>
        </div>
        <Button
          text='Sobre mim'
          Icon={<AiOutlineCaretDown />}
          onClick={scrollTo}
        />
      </section>
      <footer>
        <a
          href='https://www.linkedin.com/in/leonardo-agostini-costa-4a34371b4/'
          target='_blank'
        >
          <AiFillLinkedin />
        </a>
        <a href='https://www.instagram.com/leo.agostini2/' target='_blank'>
          <AiFillInstagram />
        </a>
        <a href='https://github.com/Leo-byte-rgb' target='_blank'>
          <AiFillGithub />
        </a>
      </footer>
    </div>
  );
};

export default memo(Landing);
