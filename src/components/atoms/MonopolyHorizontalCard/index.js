import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import Paragraph from '../Paragraph';

const MonopolyHorizontalCard = (props) => {
  const {
    className, cardName, cardPrice, cardColor,
  } = props;

  return (
    <div className={classNames(styles.monopolyHorizontalCard, className)}>
      <div className={classNames(styles.cardInfo)}>
        <Paragraph>{cardName}</Paragraph>
        <Paragraph>{`${cardPrice}$`}</Paragraph>
      </div>
      <div className={classNames(styles.cardStreetColor, styles[cardColor])} />
    </div>
  );
};

MonopolyHorizontalCard.propTypes = {
  className: PropTypes.string,
  cardColor: PropTypes.string,
  cardName: PropTypes.string,
  cardPrice: PropTypes.string,
};

MonopolyHorizontalCard.defaultProps = {
  className: '',
  cardColor: 'red',
  cardName: '',
  cardPrice: 0,
};

export default MonopolyHorizontalCard;
