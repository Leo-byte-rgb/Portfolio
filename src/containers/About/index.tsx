import { memo, useContext, useRef } from 'react';
import { HeightContext } from '../../Contexts/heigths';
import Button from '../../components/Button';
import Image from 'next/image';
import {
  about,
  titleContainer,
  resume,
  me,
  profile,
  skills,
} from './style.module.scss';
import { useEffect } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { dispatch, state } = useContext(HeightContext);

  useEffect(() => {
    dispatch({ type: 'about', payload: sectionRef.current?.offsetTop ?? 0 });
  }, []);

  const scrollToContact = () =>
    window.scrollTo({ top: state.contact, behavior: 'smooth' });

  return (
    <section id={about} ref={sectionRef}>
      <div id={titleContainer}>
        <h3>S O B R E</h3>
      </div>
      <div className={resume}>
        <h2>Um pouco sobre mim.</h2>
        <Image src='/icons/eu.png' width={75} height={75} id={me} />
        <p>
          Entusiasmado por tecnologia e inovação, aos 15 anos entrei no
          Instituto Federal de Santa Cararina, onde comecei a cursar o ensino
          médio integrado em informática, lá conheci linguagens como C e Java.
          Com o passar do tempo comecei a estudar Javascript e Typescript,
          atualmente atuo desenvolvendo interfaces web performáticas usando
          ReactJS, futuramente pretendo avançar como programador FullStack.
        </p>
      </div>
      <div className={resume} id={profile}>
        <h2>Meu perfil.</h2>
        <p>
          Considero-me uma pessoa proativa com fome de conhecimento, sempre
          buscando melhorar meu nível técnico e pessoal, sou apaixonado por
          ensinar, então, no que eu puder ajudar alguém, mesmo que seja pouco,
          já fico extramente feliz.
        </p>
        <ol>
          <li>
            <strong>Nome Completo:</strong>
            <span>Leonardo Agostini Costa</span>
          </li>
          <li>
            <strong>Nascimento:</strong>
            <span>08 de Outubro de 2002</span>
          </li>
          <li>
            <strong>Área de Atuação:</strong>{' '}
            <span>Desenvolvimento Front-End</span>
          </li>
          <li>
            <strong>Website:</strong>
            <span>https://portfolio-six-ashy-15.vercel.app/</span>
          </li>
          <li>
            <strong>Email:</strong> <span>leon.ac@outlook.com</span>
          </li>
        </ol>
      </div>
      <div className={resume} id={skills}>
        <h2>Minhas Habilidades.</h2>
        <p>
          Atualmente trabalho com desenvolvimento de interfaces Web, faço
          integrações de dados com Javascript e para o Layout da página HTML E
          CSS, como framework/biblioteca minha escolha foi o ReactJS. E como já
          disse anteriormente, estou sempre em busca de me aprimorar e melhorar
          meu nível técnico.
        </p>
        <ul>
          <li>
            <strong>HTML</strong>
          </li>
          <li>
            <strong>CSS</strong>
          </li>
          <li>
            <strong>SASS</strong>
          </li>
          <li>
            <strong>JAVASCRIPT</strong>
          </li>
          <li>
            <strong>TYPESCRIPT</strong>
          </li>
          <li>
            <strong>REACTJS</strong>
          </li>
          <li>
            <strong>REACT NATIVE (Breve)</strong>
          </li>
          <li>
            <strong>SQL (Breve)</strong>
          </li>
          <li>
            <strong>POO (Breve)</strong>
          </li>
          <li>
            <strong>NODEJS (Breve)</strong>
          </li>
        </ul>
      </div>
      <Button text='Contate-me' onClick={scrollToContact} />
    </section>
  );
};

export default memo(About);
