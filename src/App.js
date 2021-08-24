import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

import styles from './App.module.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={styles.appContainer}>
      <Searchbar onSubmit={setSearchQuery} />
      <ImageGallery searchQuery={searchQuery} />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
