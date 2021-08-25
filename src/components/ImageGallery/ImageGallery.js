import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import Container from '../Container';
import ImageGalleryItem from './ImageGalleryItem';
import LoaderSpinner from '../LoaderSpinner';
import Button from './Button/Button';
import Modal from '../Modal/Modal';

import api from '../../utils/apiService';

import styles from './ImageGallery.module.scss';

function ImageGallery({ searchQuery }) {
  const [imgArr, setImgArr] = useState([]);
  const [imgInModal, setImgInModal] = useState('');
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setImgArr([]);
    api.setQuery(searchQuery);
    api.resetPage();
    saveImages();
  }, [searchQuery]);

  useEffect(() => {
    if (api.page === 1) {
      return;
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [imgArr]);

  const onBtnLoadMoreClick = () => {
    api.incrementPage();
    saveImages();
  };

  const onImgClick = id => {
    const img = imgArr.find((e, idx) => idx === id).largeImageURL;
    setImgInModal(img);
  };

  function saveImages() {
    setPending(true);
    api
      .fetchArticles()
      .then(({ hits }) => setImgArr(prev => [...prev, ...hits]))
      .catch(error => toast.error(`${error}`))
      .finally(setPending(false));
  }

  return (
    <>
      <Container>
        <ul className={styles.ImageGallery}>
          {imgArr.map(({ webformatURL, tags }, index) => (
            <ImageGalleryItem
              webformatURL={webformatURL}
              alt={tags}
              key={index}
              id={index}
              onImgClick={onImgClick}
            />
          ))}
        </ul>
      </Container>

      {!!imgArr.length && !pending && (
        <Button onBtnLoadMoreClick={onBtnLoadMoreClick} />
      )}

      {pending && <LoaderSpinner />}

      {imgInModal && (
        <Modal closeModal={() => setImgInModal('')}>
          <img src={imgInModal} alt="large pic in modal" />
        </Modal>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};

export default ImageGallery;
