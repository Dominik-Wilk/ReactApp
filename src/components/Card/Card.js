import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFav } from '../../redux/store';
import { useState } from 'react';
import clsx from 'clsx';

const Card = ({ title, id }) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const swap = e => {
    e.preventDefault();
    dispatch(toggleCardFav(id));
    setIsFav(!isFav);
  };

  return (
    <li className={styles.card}>
      {title}
      <button
        onClick={swap}
        className={clsx('fa fa-star-o', styles.fav, {
          [styles.isFav]: isFav,
        })}></button>
    </li>
  );
};
export default Card;
