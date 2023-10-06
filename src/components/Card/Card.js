import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFav } from '../../redux/cardsRedux';
import { useState } from 'react';
import clsx from 'clsx';

const Card = ({ title, id, isFav }) => {
  const [isFavourite, setIsFavourite] = useState(isFav);
  const dispatch = useDispatch();

  const swap = e => {
    e.preventDefault();
    dispatch(toggleCardFav(id));
    setIsFavourite(!isFavourite);
  };

  return (
    <li className={styles.card}>
      {title}
      <button
        onClick={swap}
        className={clsx('fa fa-star-o', styles.fav, {
          [styles.isFav]: isFavourite,
        })}></button>
    </li>
  );
};
export default Card;
