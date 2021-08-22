import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';

const Paragraph = (props) => {
  const { className, children } = props;

  return (
    <p className={classNames(styles.paragraph, className)}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Paragraph.defaultProps = {
  className: '',
  children: [],
};

export default Paragraph;
