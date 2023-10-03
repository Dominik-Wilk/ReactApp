import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>My first react app</PageTitle>
      <p className={styles.subtitle}>
        A simple to-do app, with list, columns and card
      </p>
    </div>
  );
};

export default Hero;
