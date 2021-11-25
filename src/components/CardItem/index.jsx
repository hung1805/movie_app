import React from 'react';
import { useNavigate } from 'react-router-dom';
import no_image from '../../assets/imgs/no_image.jpg';
import { splitString } from '../../utils/util';

const CardItem = (props) => {
  const { id, poster_path, title, rating } = props;
  const navigate = useNavigate();

  const handleShowMovieDetail = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className='text-center cursor-pointer border-2 border-white shadow-xl rounded-md bg-grey-200 overflow-hidden transition duration-300 transform hover:scale-105 hover:border-bookmark-red '
      onClick={handleShowMovieDetail}
    >
      <img
        src={
          poster_path !== null
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : no_image
        }
        alt={title}
        className='w-full h-5/6 object-cover rounded-md'
      />
      <h4 className='mt-4 mb-2 lg:mt-8'>{`${splitString(title, 8)} (${rating})`}</h4>
    </div>
  );
};

export default CardItem;
