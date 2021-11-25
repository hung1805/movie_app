import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { movieAxios } from '../../api/axios.js';
import BannerMovie from './BannerMovie.jsx';
import { SlickNextArrow, SlickPrevArrow } from './SlickSliderBtn.jsx';

const Banner = () => {
  const [bannerMovies, setBannerMovies] = useState([]);

  //Load movies data
  useEffect(() => {
    const loadBanner = async () => {
      try {
        const results = await movieAxios.get(
          `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        );
        await setBannerMovies(results.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    loadBanner();
  }, []);

  //Slick Settings
  const slickSettings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <SlickPrevArrow />,
    nextArrow: <SlickNextArrow />,
  };

  return (
    <div>
      <Slider {...slickSettings} className='relative'>
        {bannerMovies?.map((movie) => (
          <BannerMovie
            key={movie.id}
            id={movie.id}
            backdrop_path={movie.backdrop_path}
            title={movie.title}
            overview={movie.overview}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
