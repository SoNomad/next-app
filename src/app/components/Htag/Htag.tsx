import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import React from 'react';
import cn from 'classnames';

export const Htag = ({ tag, children, className }: HtagProps): JSX.Element => {
  const Tag = tag;

  return <Tag className={cn(styles.H, styles[tag], className)}>{children}</Tag>;
};
