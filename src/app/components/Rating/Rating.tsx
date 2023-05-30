'use client'; // for es6 standart

import { RaitingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, JSX } from 'react';
import Star from './star.svg';
import React from 'react';

export const Rating = ({
  isEditable = false,
  rating = 3,
  setRating,
  ...props
}: RaitingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedRating = ratingArray.map((r: JSX.Element, i: number) => {
      return <Star className={cn(styles.star, { [styles.filled]: i < currentRating })} />;
    });
    setRatingArray(updatedRating);
  };
  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
