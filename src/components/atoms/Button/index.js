import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';

const Button = (props) => {
  const {
    onClick, disabled, className, children 
  } = props;

  const onClickCustom = (event) => {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // eslint-disable-next-line no-multi-assign
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add(styles.ripple);

    console.log(circle)

    const ripple = button.getElementsByClassName(styles.ripple)[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    onClick();
  };

  return (
    <button type="button" onClick={onClickCustom} disabled={disabled} className={classNames(styles.button, className)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: '',
  children: [],
};

export default Button;
