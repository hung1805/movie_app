import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
export const SlickPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='hidden prevBtn'>
      <FontAwesomeIcon
        icon={faChevronCircleLeft}
        size='4x'
        className='cursor-pointer bg-transparent'
        color='rgba(0,0,0,0.5)'
        onClick={onClick}
      />
    </div>
  );
};
export const SlickNextArrow = (props) => {
  const { onClick } = props;

  return (
    <div className='hidden nextBtn'>
      <FontAwesomeIcon
        icon={faChevronCircleRight}
        size='4x'
        className='cursor-pointer bg-transparent'
        color='rgba(0,0,0,0.5)'
        onClick={onClick}
      />
    </div>
  );
};
