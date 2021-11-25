import React from 'react';
import { useNavigate } from 'react-router-dom';
import { shortString } from '../../utils/util';

const MovieDetailSliderItem = (props) => {
  const { id, title, poster_path } = props;
  const navigate = useNavigate();
  return (
    <div
      className='border-2 shadow-md rounded-md p-2 text-red cursor-pointer'
      onClick={() => {
        navigate(`/movie/${id}`, { replace: true });
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
        className='img'
      />
      <p className='text-xs my-2'>{shortString(title, 15)}</p>
    </div>
  );
};

export default MovieDetailSliderItem;
