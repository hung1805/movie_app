import React from 'react';
import { useNavigate } from 'react-router';
import { splitString } from '../../utils/util';

const BannerMovie = (props) => {
  const { id, title, overview, backdrop_path } = props;
  const navigate = useNavigate();
  //Event Handler
  const handleBannerClick = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <div>
      <div
        className='relative w-full h-52 mt-12 overflow-y-hidden md:mt-16 md:h-96 lg:mt-24 lg:h-banner'
        onClick={handleBannerClick}
      >
        <img
          className='img'
          src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
          alt=''
        />
        <div className='absolute left-0 bottom-0 z-10 text-white font-roboto flex flex-col justify-end pb-4 ml-4 lg:animate-fadeIn lg:w-2/3 lg:pb-8 lg:text-left lg:ml-12'>
          <h3 className='text-2xl font-medium pb-1 md:text-5xl lg:text-6xl '>{title}</h3>
          <p className='text-2xl hidden lg:block'>
            {overview.split(' ').length > 30 ? `${splitString(overview, 20)}` : overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerMovie;
