import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import Paragraph from '../Paragraph';

const MonopolyCard = (props) => {
  const {
    className, cardName, cardPrice, cardColor,
  } = props;

  return (
    <div className={classNames(styles.monopolyCard, className)}>
      <div className={classNames(styles.cardStreetColor, styles[cardColor])} />
      <div className={classNames(styles.cardInfo)}>
        <Paragraph className={styles.centerText}>{cardName}</Paragraph>
        <Paragraph>{`${cardPrice}$`}</Paragraph>
      </div>
    </div>
  );
};

MonopolyCard.propTypes = {
  className: PropTypes.string,
  cardColor: PropTypes.string,
  cardName: PropTypes.string,
  cardPrice: PropTypes.string,
};

MonopolyCard.defaultProps = {
  className: '',
  cardColor: 'red',
  cardName: '',
  cardPrice: 0,
};

export default MonopolyCard;
