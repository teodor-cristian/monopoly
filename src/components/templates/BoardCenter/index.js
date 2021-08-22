import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';
import DicesContainer from './../Dices';

const BoardCenter = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.boardCenterWrapper, className)}>
      <DicesContainer />
    </div>
  );
};

BoardCenter.propTypes = {
  className: PropTypes.string,
};

BoardCenter.defaultProps = {
  className: '',
};

export default BoardCenter;
