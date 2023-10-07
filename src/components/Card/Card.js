import styles from './Card.module.scss';
import Buttons from '../Buttons/Buttons';

const Card = ({ title, id, isFavourite }) => {
  return (
    <>
      <li className={styles.card}>
        {title}
        <Buttons isFavourite={isFavourite} id={id} />
      </li>
    </>
  );
};
export default Card;
