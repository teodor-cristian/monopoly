import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import Paragraph from '../Paragraph';
import H1 from '../H1';

const MonopolyCardCornerFreeParking = (props) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(styles.monopolyCardFreeParking, className)}>
      <H1 className={styles.customHeader}>FREE</H1>
      <H1 className={styles.customHeader}>PARKING</H1>
    </div>
  );
};

MonopolyCardCornerFreeParking.propTypes = {
  className: PropTypes.string,
};

MonopolyCardCornerFreeParking.defaultProps = {
  className: '',
};

export default MonopolyCardCornerFreeParking;
