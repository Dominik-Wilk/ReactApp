import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import styles from './ListsForm.module.scss';

const ListsForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label className={styles.name} htmlFor='title'>
        Title:
      </label>
      <TextInput
        id='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label className={styles.name} htmlFor='description'>
        Description:
      </label>
      <TextInput
        id='description'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Button>Add List</Button>
    </form>
  );
};

export default ListsForm;
