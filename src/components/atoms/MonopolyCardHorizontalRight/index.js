import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import Paragraph from '../Paragraph';

const MonopolyCardHorizontalRight = (props) => {
  const {
    className, cardName, cardPrice, cardColor,
  } = props;

  return (
    <div className={classNames(styles.monopolyCardHorizontalRight, className)}>
      <div className={classNames(styles.cardStreetColor, styles[cardColor])} />
      <div className={classNames(styles.cardInfo)}>
        <Paragraph>{cardName}</Paragraph>
        <Paragraph>{`${cardPrice}$`}</Paragraph>
      </div>
    </div>
  );
};

MonopolyCardHorizontalRight.propTypes = {
  className: PropTypes.string,
  cardColor: PropTypes.string,
  cardName: PropTypes.string,
  cardPrice: PropTypes.string,
};

MonopolyCardHorizontalRight.defaultProps = {
  className: '',
  cardColor: 'red',
  cardName: '',
  cardPrice: 0,
};

export default MonopolyCardHorizontalRight;
