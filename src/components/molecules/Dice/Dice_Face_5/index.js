import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import DiceFaceEmpty from '../../../atoms/Dice/Dice_Face_Empty';
import Dot from '../../../atoms/Dice/Dot';

const DiceFace5 = (props) => {
  const { className } = props;

  return (
    <DiceFaceEmpty className={classNames(styles.diceValue5, className)}>
      <Dot className={classNames(styles.dot1)} />
      <Dot className={classNames(styles.dot2)} />
      <Dot className={classNames(styles.dot3)} />
      <Dot className={classNames(styles.dot4)} />
      <Dot className={classNames(styles.dot5)} />
    </DiceFaceEmpty>
  );
};

DiceFace5.propTypes = {
  className: PropTypes.string,
};

DiceFace5.defaultProps = {
  className: '',
};

export default DiceFace5;
