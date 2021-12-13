import {
  credentialsUI,
  titleContainer,
  resume,
  timeline,
  mark,
  content,
} from './style.module.scss';
import { FaGraduationCap, FaBriefcase } from 'react-icons/Fa';
import { memo, useContext, useEffect, useRef } from 'react';
import { HeightContext } from '../../Contexts/heigths';

const Credentials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { dispatch } = useContext(HeightContext);

  useEffect(() => {
    dispatch({
      type: 'resume',
      payload: sectionRef.current?.offsetTop ?? 0,
    });
  }, []);

  return (
    <section id={credentialsUI} ref={sectionRef}>
      <div id={titleContainer}>
        <h3>R E S U M O</h3>
      </div>
      <div className={resume}>
        <h2>Minha credênciais.</h2>
        <p>Um pouco da minha jornada no mundo da Tecnologia.</p>
      </div>
      <div id={timeline}>
        <header>
          <h2>Formação</h2>
        </header>
        <div>
          <div className={content}>
            <div className={mark}>
              <FaGraduationCap />
            </div>
            <h2>Instituto Federal de Santa Catarina </h2>
            <strong>Feveiro 2018 - Março 2022</strong>
            <hr />
            <p>
              Ensino Médio com Técnico integrado em informática, aprendi
              estruturas de dados, laços, lógica de programação com C e Java,
              regras de negócios, UML e requisitos funcionais
            </p>
          </div>
          <div className={content}>
            <div className={mark}>
              <FaGraduationCap />
            </div>
            <h2>Curso de JavaScript e TypeScript do básico ao avançado 2021</h2>
            <strong>Setembro 2020 - Presente</strong>
            <hr />
            <p>
              Aprenda Javascript moderno (ES6+) para front-end (com Webpack,
              babel, React, React Hooks, Redux, HTML5, CSS3 e mais) e back-end
              (com Node, Express, MySQL / MariaDB, MongoDB, PostgreSQL, Next.Js,
              Strapi e mais) e se torne um desenvolvedor full stack.
            </p>
          </div>
          <div className={content}>
            <div className={mark}>
              <FaGraduationCap />
            </div>
            <h2>Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!</h2>
            <strong>Fevereiro 2021 - Abril 2021</strong>
            <hr />
            <p>
              O NextJS nada mais é do que um framework para React, a principal
              biblioteca para desenvolvimento web. As principais funcionalidades
              do Next são a renderização estática e pelo lado do servidor (SSR),
              possuir suporte para o TypeScript e um serviço próprio de
              tratamento de rotas. Teremos uma aplicação para Criação, Leitura,
              Edição e Remoção de dados, o famoso CRUD (Create, Read, Update,
              Delete) com NextJS.
            </p>
          </div>
          <div className={content}>
            <div className={mark}>
              <FaGraduationCap />
            </div>
            <h2>React e TypeScript: desenvolvendo um Dashboard</h2>
            <strong>Julho 2021 - Dezembro 2021</strong>
            <hr />
            <p>
              Nesse projeto, além de aprender a criar gráficos, também irá criar
              temas de cores e permitir o usuário a trocar o tema (dark e
              light). E também irá aprender a aplicar animações.
            </p>
          </div>
        </div>
      </div>
      <div id={timeline}>
        <header>
          <h2>Experiência</h2>
        </header>
        <div>
          <div className={content}>
            <div className={mark}>
              <FaBriefcase />
            </div>
            <h2>Aphesis TI - Tecnologia para negócios</h2>
            <strong>Feveiro 2021 - Presente</strong>
            <hr />
            <p>
              Desenvolvimento de Sistema de Business Inteligence, criando
              interfaces Web performáticas usando ReactJS para o desenvolvimento
              da plataforma, Redux para controle de estado da aplicação e
              Material UI e Styled Components para criar componentes
              estilizados.
            </p>
          </div>
          <div className={content}>
            <div className={mark}>
              <FaBriefcase />
            </div>
            <h2>Freelancer - Web</h2>
            <strong>Junho 2021 - Setembro 2021</strong>
            <hr />
            <p>
              Criação de Sistema de Gestão para agricultores, sistema de
              autenticação, Layout e integração com API. No projeto fui
              responsável por desenvolver a arquitetura do projeto onde optei
              por usar ReactJS com Typescript.
            </p>
          </div>
          <div className={content}>
            <div className={mark}>
              <FaBriefcase />
            </div>
            <h2>IFSC - Monitor de Informática</h2>
            <strong>Março 2021 - Setembro 2021</strong>
            <hr />
            <p>
              Atuei como monitor de informática pelo Instituto Federal de Santa
              Catarina durante o período 2021/1, onde auxiliei os alunos do
              Câmpus com suas matérias técnicas, entre elas, Programação
              Estruturada, Programação Orientada a Objetos, Programação
              Orientada a Eventos, Estrutura de Dados, Lógica de Programação e
              Desenvolvimento Web.
            </p>
          </div>
          <div className={content}>
            <div className={mark}>
              <FaBriefcase />
            </div>
            <h2>Startup Weekend - ImigraWork</h2>
            <strong>Novembro 2021 - Novembro 2021</strong>
            <hr />
            <p>
              Durante os dias 28, 29 e 30 participei do evento Startup Weekend,
              onde fui Campeão da edição junto com meu time. O objetivo do
              Evento era desenvolver uma Startup em 54 horas e apresentá-la para
              os jurados nos dias finais. Como atuante, auxiliei no levantamente
              de Requisitos funcionais para a ideia, participei no processo de
              criação de do MVP (Minimum viable product), entrevistei pessoas
              para descobrir seus problemas e como eu pederia validá-los para
              mais tarde resolvê-los, na reta final do evento, comecei as vendas
              prévias do produto. Durante os 3 dias do evento melhorei minhas
              SoftSkills e mudei o modo de enxergar um produto/startup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Credentials);
