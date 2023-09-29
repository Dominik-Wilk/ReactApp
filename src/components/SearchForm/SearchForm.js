import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchPhrase } from '../../redux/store';

const SearchForm = () => {
  const [searchString, setSearchString] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    setSearchString(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchPhrase(searchString));
    setSearchString('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput placeholder='Search…' onChange={handleInputChange} value={searchString} />
      <Button type='submit'>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
