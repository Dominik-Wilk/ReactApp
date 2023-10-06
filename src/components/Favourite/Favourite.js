import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favourite.module.scss';
import { useSelector } from 'react-redux';
import { getFavCards } from '../../redux/store';

const Favourite = () => {
  const cards = useSelector(getFavCards);

  if (cards.length === 0) {
    return (
      <>
        <PageTitle>Favourite</PageTitle>
        <h2 className={styles.column}>No favourite cards...</h2>
      </>
    );
  } else {
    return (
      <>
        <PageTitle>Favourite</PageTitle>
        <article className={styles.column}>
          <ul className={styles.cards}>
            {cards.map(card => (
              <Card key={card.id} title={card.title} id={card.id} />
            ))}
          </ul>
        </article>
      </>
    );
  }
};
export default Favourite;
