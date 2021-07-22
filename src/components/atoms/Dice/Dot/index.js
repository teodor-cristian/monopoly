import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';

const Dot = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.dot, className)} />
  );
};

Dot.propTypes = {
  className: PropTypes.string,
};

Dot.defaultProps = {
  className: '',
};
export default Dot;
