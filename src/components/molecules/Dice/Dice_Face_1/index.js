import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import DiceFaceEmpty from '../../../atoms/Dice/Dice_Face_Empty';
import Dot from '../../../atoms/Dice/Dot';

const DiceFace1 = (props) => {
  const { className } = props;

  return (
    <DiceFaceEmpty className={classNames(styles.diceValue1, className)}>
      <Dot />
    </DiceFaceEmpty>
  );
};

DiceFace1.propTypes = {
  className: PropTypes.string,
};

DiceFace1.defaultProps = {
  className: '',
};

export default DiceFace1;
