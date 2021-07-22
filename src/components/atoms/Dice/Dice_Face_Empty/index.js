import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';

const DiceFaceEmpty = (props) => {
  const { children, className } = props;

  return (
    <div className={classNames(styles.diceFace, className)}>
      {children}
    </div>
  );
};

DiceFaceEmpty.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DiceFaceEmpty.defaultProps = {
  children: [],
  className: '',
};

export default DiceFaceEmpty;
