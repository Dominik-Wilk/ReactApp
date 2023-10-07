import clsx from 'clsx';
import styles from './Buttons.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFav } from '../../redux/cardsRedux';

const Buttons = ({ id, isFavourite }) => {
  const [isFav, setIsFav] = useState(isFavourite);
  const dispatch = useDispatch();

  const swap = e => {
    e.preventDefault();
    dispatch(toggleCardFav(id));
    setIsFav(!isFav);
  };

  const remove = e => {
    e.preventDefault();
    dispatch(removeCard(id));
  };

  return (
    <div>
      <button
        onClick={swap}
        className={clsx('fa fa-star-o', styles.fav, {
          [styles.isFav]: isFavourite,
        })}></button>
      <button onClick={remove} className={'fa fa-trash ' + styles.fav}></button>
    </div>
  );
};
export default Buttons;
