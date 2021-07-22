import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import DiceFace1 from '../../molecules/Dice/Dice_Face_1';
import DiceFace2 from '../../molecules/Dice/Dice_Face_2';
import DiceFace3 from '../../molecules/Dice/Dice_Face_3';
import DiceFace4 from '../../molecules/Dice/Dice_Face_4';
import DiceFace5 from '../../molecules/Dice/Dice_Face_5';
import DiceFace6 from '../../molecules/Dice/Dice_Face_6';

const Dice = (props) => {
  const { className } = props;
  const [randomSpinNo, setRandomSpinNo] = React.useState(1);

  console.log( randomSpinNo )
  const spinDice = () => {
    const randomNo = Math.floor(Math.random() * 6) + 1;
    setRandomSpinNo(randomNo);
  };

  return (
    <div>
      <div className={classNames(styles.dice, styles[`switchDiceTo${randomSpinNo}`], className)}>
        <DiceFace1 />
        <DiceFace2 />
        <DiceFace3 />
        <DiceFace4 />
        <DiceFace5 />
        <DiceFace6 />
      </div>
      <button onClick={spinDice}>Spin</button>
    </div>
  );
};

Dice.propTypes = {
  className: PropTypes.string,
};

Dice.defaultProps = {
  className: '',
};

export default Dice;
