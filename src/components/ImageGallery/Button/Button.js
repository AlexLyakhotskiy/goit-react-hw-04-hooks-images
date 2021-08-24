import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ onBtnLoadMoreClick }) => {
  return (
    <button
      onClick={onBtnLoadMoreClick}
      type="button"
      className={styles.button}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  onBtnLoadMoreClick: PropTypes.func.isRequired,
};

export default Button;
