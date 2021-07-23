import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import Dice from '../../organisms/Dice';
import Button from '../../atoms/Button';
import Header1 from '../../atoms/Header1';
import DelayedNumberDisplay from '../../atoms/DelayedNumberDisplay';

const DiceContainer = (props) => {
  const { className } = props;
  const [randomSpinNo, setRandomSpinNo] = React.useState([1, 1]);

  const generateRandomNo = () => Math.floor(Math.random() * 6) + 1;

  const spinDice = () => {
    setRandomSpinNo([generateRandomNo(), generateRandomNo()]);
  };

  return (
    <div className={classNames(styles.diceWrapper, className)}>
      <div className={classNames(styles.diceContainer, className)}>
        <Dice
          randomSpinNo={randomSpinNo[0]}
          className={classNames(styles.diceWrapper, className)}
          key={Math.random()}
        />
        <Dice
          randomSpinNo={randomSpinNo[1]}
          className={classNames(styles.diceWrapper, className)}
          key={Math.random()}
        />
      </div>
      <div className={classNames(styles.diceActionsContainer, className)}>
        <Header1>
          Total:
          {' '}
          <DelayedNumberDisplay
            number={randomSpinNo[0] + randomSpinNo[1]}
            delay={2000}
            key={Math.random()}
          />
        </Header1>
        <Button onClick={spinDice}>Spin</Button>
      </div>
    </div>
  );
};

DiceContainer.propTypes = {
  className: PropTypes.string,
};

DiceContainer.defaultProps = {
  className: '',
};

export default DiceContainer;
