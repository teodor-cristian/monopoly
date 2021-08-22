import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import Paragraph from '../Paragraph';

const MonopolyCardVerticalTop = (props) => {
  const {
    className, cardName, cardPrice, cardColor,
  } = props;

  return (
    <div className={classNames(styles.monopolyCardVerticalTop, className)}>
      <div className={classNames(styles.cardInfo)}>
        <Paragraph className={styles.centerText}>{cardName}</Paragraph>
        <Paragraph>{`${cardPrice}$`}</Paragraph>
      </div>
      <div className={classNames(styles.cardStreetColor, styles[cardColor])} />
    </div>
  );
};

MonopolyCardVerticalTop.propTypes = {
  className: PropTypes.string,
  cardColor: PropTypes.string,
  cardName: PropTypes.string,
  cardPrice: PropTypes.string,
};

MonopolyCardVerticalTop.defaultProps = {
  className: '',
  cardColor: 'red',
  cardName: '',
  cardPrice: 0,
};

export default MonopolyCardVerticalTop;
