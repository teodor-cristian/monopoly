import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import Paragraph from '../Paragraph';
import H1 from '../H1';

const MonopolyCardCornerJail = (props) => {
  const {
    className,
  } = props;

  return (
    <div className={classNames(styles.monopolyCardJail, className)}>
      <H1 className={styles.customHeader}>IN</H1>
      <H1 className={styles.customHeader}>JAIL</H1>
    </div>
  );
};

MonopolyCardCornerJail.propTypes = {
  className: PropTypes.string,
};

MonopolyCardCornerJail.defaultProps = {
  className: '',
};

export default MonopolyCardCornerJail;
