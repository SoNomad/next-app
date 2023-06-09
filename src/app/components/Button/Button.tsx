import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import React from 'react';

export const Button = ({
  appearance,
  children,
  arrow = 'none',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <span className={cn(styles.arrow, { [styles.down]: arrow == 'down' })}> {'>'} </span>
      )}
    </button>
  );
};
