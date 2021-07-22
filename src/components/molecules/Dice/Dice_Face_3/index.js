import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import DiceFaceEmpty from '../../../atoms/Dice/Dice_Face_Empty';
import Dot from '../../../atoms/Dice/Dot';

const DiceFace3 = (props) => {
  const { className } = props;

  return (
    <DiceFaceEmpty className={classNames(styles.diceValue3, className)}>
      <Dot className={classNames(styles.dot1)} />
      <Dot className={classNames(styles.dot2)} />
      <Dot className={classNames(styles.dot3)} />
    </DiceFaceEmpty>
  );
};

DiceFace3.propTypes = {
  className: PropTypes.string,
};

DiceFace3.defaultProps = {
  className: '',
};

export default DiceFace3;
