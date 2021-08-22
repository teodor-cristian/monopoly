import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import H1 from '../H1';

const MonopolyCardCornerGoToJail = (props) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(styles.monopolyCardGoToJail, className)}>
      <H1 className={styles.customHeader}>GO</H1>
      <H1 className={styles.customHeader}>TO</H1>
      <H1 className={styles.customHeader}>JAIL</H1>
    </div>
  );
};

MonopolyCardCornerGoToJail.propTypes = {
  className: PropTypes.string,
};

MonopolyCardCornerGoToJail.defaultProps = {
  className: '',
};

export default MonopolyCardCornerGoToJail;
