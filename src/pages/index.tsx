import { useState } from "react";
import styles from "../styles/home.module.scss";

type Images = Array<string>;
const Index = () => {
  const [images, setImages] = useState<Images>([
    "icons/reactIcon.svg",
    "icons/tsIcon.svg",
    "icons/jsicon.svg",
    "icons/html5icon.svg",
    "icons/css.svg",
  ]);
  const previewImage = () => {
    const lastIndex = images.pop();
    setImages([lastIndex!.toString(), ...images]);
  };
  const nextImage = () => {
    const firstIndex = images.shift();
    setImages([...images, firstIndex!.toString()]);
  };
  return (
    <div className={styles.container}>
      <section className={styles.welcome}>
        <h2>Front-end Developer</h2>
        <span>
          "Code, make it pretty and simple, that's what i do, and love to."
        </span>
        <img src="icons/hero.svg" alt="" />
      </section>
      <section className={styles.about}>
        <h2>Olá, eu sou Leonardo</h2>
        <div>
          <p>
          Entusiasmado por tecnologia e inovação, aos 15 anos entrei no
          Instituto Federal de Santa Cararina, onde comecei a cursar o ensino
          médio integrado em informática, lá vi linguagens como C e Java, e com
          o passar do tempo, comecei a me aprofundar em Javascript e Typescript,
          tendo como stacks Javascript, Typescript, React, Next.Js, Html e Css,
          futuramente pretendo me tornar um programador Full-Stack.
        </p>
        <img src="icons/eu.png" alt="" />
        </div>
      </section>
      <section className={styles.stacks}>
        <div className={styles.frontendContainer}>
          <img src="icons/frontend.svg" alt="" />
          <h3>Front-end Developer</h3>
        </div>
        <h3>Stacks</h3>
        <div className={styles.slider}>
          <button onClick={() => previewImage()}>
            <img src={images[1]} alt="" className={styles.arrow} />
          </button>
          <img src={images[2]} alt="" />
          <button onClick={() => nextImage()}>
            <img src={images[3]} alt="" className={styles.arrow} />
          </button>
        </div>
      </section>
      <footer className={styles.footer}>
        <div>
          <a href="https://github.com/Leo-byte-rgb" target="blank">
            <img src="icons/github.svg" alt="" />
          </a>
          <a target="blank" href="https://www.linkedin.com/in/leonardo-agostini-costa-4a34371b4/" >
            <img src="icons/linkedin.svg" alt=""/>
          </a>
          
        </div>
        <h4>Todos os Direitos Reservados.</h4>
      </footer>
    </div>
  );
};
export default Index;
