import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
export const SlickPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className='hidden prevBtn'>
      <FontAwesomeIcon
        icon={faChevronLeft}
        size='4x'
        className='cursor-pointer bg-transparent'
        color='#fa5959'
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
        icon={faChevronRight}
        size='4x'
        className='cursor-pointer bg-transparent'
        color='#fa5959'
        onClick={onClick}
      />
    </div>
  );
};
