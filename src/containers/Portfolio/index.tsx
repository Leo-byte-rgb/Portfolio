import { HeightContext } from '../../Contexts/heigths';
import { portfolioUI, list, item, counter } from './style.module.scss';
import { FaGithub, FaCoffee, FaRegClock } from 'react-icons/fa';
import CountUp from 'react-countup';
import { memo, useContext } from 'react';

interface IPortfolioProps {
  coffeCups: number;
  repositories: number;
  workedHours: number;
}

const Portfolio = ({
  coffeCups,
  repositories,
  workedHours,
}: IPortfolioProps) => {
  const { position } = useContext(HeightContext);

  return (
    <section id={portfolioUI}>
      <div id={list}>
        <div className={item}>
          <FaGithub />
          {position > 4400 && (
            <CountUp
              start={0}
              end={repositories}
              duration={2.2}
              className={counter}
            />
          )}
          <span>Repositórios no Github</span>
        </div>
        <div className={item}>
          <FaCoffee />
          {position > 4400 && (
            <CountUp
              start={0}
              end={coffeCups}
              duration={2.2}
              className={counter}
            />
          )}
          <span>Xícaras De Café</span>
        </div>
        <div className={item}>
          <FaRegClock />
          {position > 4400 && (
            <CountUp
              start={0}
              end={workedHours}
              duration={2.2}
              className={counter}
            />
          )}
          <span>Horas Trabalhadas</span>
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);
