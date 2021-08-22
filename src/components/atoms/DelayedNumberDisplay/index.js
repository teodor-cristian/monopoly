import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';

const DelayedNumberDisplay = (props) => {
  const { className, number, delay } = props;
  const [count, setCount] = React.useState(number);

  React.useEffect(() => {
    let start = 0;
    const end = 50;
    if (start === end) return;

    // find duration per increment
    const totalMilSecDur = delay;
    const incrementTime = totalMilSecDur / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(Math.floor(Math.random() * 12) + 1);

      if (start === end) {
        clearInterval(timer);
        setCount(number);
      }
    }, incrementTime);
  }, [number]);

  return (
    <span className={classNames(styles.delayedNumberDisplay, className)}>{count}</span>
  );
};

DelayedNumberDisplay.propTypes = {
  className: PropTypes.string,
  number: PropTypes.number,
  delay: PropTypes.number,
};

DelayedNumberDisplay.defaultProps = {
  className: '',
  number: 0,
  delay: 0,
};

export default DelayedNumberDisplay;
