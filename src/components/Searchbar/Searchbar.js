import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.scss';

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const onInputChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Please enter query');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          onChange={onInputChange}
          value={searchQuery}
          className={styles.SearchFormInput}
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
