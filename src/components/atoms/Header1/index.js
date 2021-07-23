import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';

const Header1 = (props) => {
  const { className, children } = props;

  return (
    <h1 className={classNames(styles.header1, className)}>
      {children}
    </h1>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Header1.defaultProps = {
  className: '',
  children: [],
};

export default Header1;
