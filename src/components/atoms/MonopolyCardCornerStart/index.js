import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import Paragraph from '../Paragraph';
import H1 from '../H1';

const MonopolyCardCornerStart = (props) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(styles.monopolyCardStart, className)}>
      <Paragraph>COLLECT 200% SALARY AS YOU PASS</Paragraph>
      <H1 className={styles.customHeader}>GO</H1>
    </div>
  );
};

MonopolyCardCornerStart.propTypes = {
  className: PropTypes.string,
};

MonopolyCardCornerStart.defaultProps = {
  className: '',
};

export default MonopolyCardCornerStart;
