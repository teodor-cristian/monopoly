import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';

const H1 = (props) => {
  const { className, children } = props;

  return (
    <h1 className={classNames(styles.h1, className)}>
      {children}
    </h1>
  );
};

H1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

H1.defaultProps = {
  className: '',
  children: [],
};

export default H1;
