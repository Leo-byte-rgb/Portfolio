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
  const nextImage = () => {
    const lastIndex = images.pop();
    setImages([lastIndex!.toString(), ...images]);
  };
  const previewImage = () => {
    const firstIndex = images.shift();
    setImages([...images, firstIndex!.toString()]);
  };

  return (
    <div className={styles.container}>
      <section className={styles.heroContainer}>
        <div>
          <h1>Front-end Developer</h1>
          <span>
            "Code, make it pretty and simple, that's what i do, and love to."
          </span>
        </div>
        <img src="icons/hero.svg" alt="hero" />
      </section>
      <section className={styles.whoIam}>
        <div>
          <h2>Olá, eu sou o Leonardo.</h2>
          <p>
            Entusiasmado por tecnologia e inovação, aos 15 anos entrei no
            Instituto Federal de Santa Cararina, onde comecei a cursar o ensino
            médio integrado em informática, lá vi linguagens como C e Java, e
            com o passar do tempo, comecei a me aprofundar em Javascript e
            Typescript, tendo como stacks Javascript, Typescript, React,
            Next.Js, Html e Css, futuramente pretendo me tornar um programador
            Full-Stack. 🤓
          </p>
        </div>
        <img src="icons/eu.png" alt="leo" />
      </section>
      <section className={styles.stacksContainer}>
        <div>
          <img src="icons/frontend.svg" alt="frontendev" />
          <span>Front-end Developer</span>
        </div>
        <div>
          <h2>Stacks</h2>
          <div className={styles.stacks}>
            <button onClick={() => previewImage()}>
              <img src="icons/left-arrow.svg" alt="arrow" />
            </button>
            {images.map((src, index) => {
              return (
                <img
                  key={index}
                  src={src}
                  alt="stack"
                  className={index === 2 ? styles.spotlightCard : ""}
                />
              );
            })}
            <button onClick={() => nextImage()}>
              <img src="icons/right-arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div>
          <a href="https://github.com/Leo-byte-rgb">
            <img src="icons/github.svg" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/leonardo-agostini-costa-4a34371b4/">
            <img src="icons/linkedin.svg" alt="github" />
          </a>
        </div>
        <h2>Todos os direitos reservados</h2>
      </footer>
    </div>
  );
};

export default Index;
