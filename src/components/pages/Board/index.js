import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import MonopolyCard from '../../atoms/MonopolyCard';
import MonopolyHorizontalCard from '../../atoms/MonopolyHorizontalCard';
import MonopolyCardVerticalTop from '../../atoms/MonopolyCardVerticalTop';
import MonopolyCardHorizontalRight from '../../atoms/MonopolyCardHorizontalRight';
import MonopolyCardCornerStart from '../../atoms/MonopolyCardCornerStart';
import MonopolyCardCornerJail from '../../atoms/MonopolyCardCornerJail';
import MonopolyCardCornerFreeParking from '../../atoms/MonopolyCardCornerFreeParking';
import MonopolyCardCornerGoToJail from '../../atoms/MonopolyCardCornerGoToJail';
import BoardCenter from '../../templates/BoardCenter';

const Board = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.board, className)}>
      <div className={classNames(styles.boardCenter, className)}>
        <BoardCenter />
      </div>
      <div className={classNames(styles.spaceCornerStart, className)}>
        <MonopolyCardCornerStart />
      </div>
      <div className={classNames(styles.horizontalBottomRow, className)}>
        <MonopolyCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />

      </div>
      <div className={classNames(styles.spaceCornerJail, className)}>
        <MonopolyCardCornerJail />
      </div>
      <div className={classNames(styles.verticalLeftRow, className)}>
        <MonopolyHorizontalCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyHorizontalCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyHorizontalCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyHorizontalCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyHorizontalCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyHorizontalCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyHorizontalCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyHorizontalCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyHorizontalCard cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
      </div>
      <div className={classNames(styles.spaceCornerFreeParcking, className)}>
        <MonopolyCardCornerFreeParking />
      </div>
      <div className={classNames(styles.horizontalTopRow, className)}>
        <MonopolyCardVerticalTop cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardVerticalTop cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardVerticalTop cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardVerticalTop cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardVerticalTop cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardVerticalTop cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardVerticalTop cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardVerticalTop cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardVerticalTop cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
      </div>
      <div className={classNames(styles.spaceCornerGoToJail, className)}>
        <MonopolyCardCornerGoToJail />
      </div>
      <div className={classNames(styles.verticalRightRow, className)}>
        <MonopolyCardHorizontalRight cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardHorizontalRight cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardHorizontalRight cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardHorizontalRight cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardHorizontalRight cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardHorizontalRight cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardHorizontalRight cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardHorizontalRight cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
        <MonopolyCardHorizontalRight cardName="OLD KENT ROAD" cardPrice="121" cardColor="green" />
      </div>

    </div>
  );
};

Board.propTypes = {
  className: PropTypes.string,
};

Board.defaultProps = {
  className: '',
};

export default Board;
