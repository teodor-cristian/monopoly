import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import DiceFaceEmpty from '../../../atoms/Dice/Dice_Face_Empty';
import Dot from '../../../atoms/Dice/Dot';

const DiceFace2 = (props) => {
  const { className } = props;

  return (
    <DiceFaceEmpty className={classNames(styles.diceValue2, className)}>
      <Dot className={classNames(styles.dot1)} />
      <Dot className={classNames(styles.dot2)} />
    </DiceFaceEmpty>
  );
};

DiceFace2.propTypes = {
  className: PropTypes.string,
};

DiceFace2.defaultProps = {
  className: '',
};

export default DiceFace2;
