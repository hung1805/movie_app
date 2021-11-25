import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { fetchMovie } from '../api/axios';
import MovieDetailSliderItem from '../components/MovieDetailSliderItem';
import Spinner from '../components/Spinner/index';
import '../styles/style.css';
import { formatTime } from '../utils/util';

const slickSettings = {
  dot: false,
  lazyload: true,
  speed: 1000,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 4,
  arrow: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
  ],
};
const MovieDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  //Load Movie with Id
  useEffect(() => {
    const loadMovieDetail = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchMovie.get(
          `${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setMovie(data);
        setIsLoading(false);
      } catch (error) {
        navigate('/notfound');
        setIsLoading(false);
      }
    };
    loadMovieDetail();
    return () => {
      setMovie({});
    };
  }, [id, navigate]);

  //Load recommendation
  useEffect(() => {
    const loadRecommend = async () => {
      try {
        const { data } = await fetchMovie(
          `${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
        );
        setRecommend(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    loadRecommend();
    return () => {
      setRecommend([]);
    };
  }, [id]);

  //Load Trailer
  useEffect(() => {
    const loadVideo = async () => {
      try {
        const { data } = await fetchMovie(
          `${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setVideo(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    loadVideo();
    return () => {
      setVideo([]);
    };
  }, [id]);
  const handleBackHomePage = () => {
    navigate('/');
  };

  return (
    <div className='relative mt-12 md:mt-16 lg:mt-24 overflow-hidden'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className='w-full mt-4 mb-4 pl-4 font-roboto uppercase text-xl md:mt-8 lg:mb-8 lg:mt-12 lg:text-4xl font-md lg:pl-8'>
            <span
              className='cursor-pointer hover:text-bookmark-red '
              onClick={handleBackHomePage}
            >
              <FontAwesomeIcon icon={faChevronLeft} size='1x' className='mr-1' />
              Home
            </span>{' '}
            | {movie.title}
          </div>
          <div className='w-screen h-52 md:h-96 overflow-hidden lg:h-movieBanner'>
            <img
              className='img'
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt=''
            />
          </div>
          <div className='container mx-auto py-8 flex flex-col md:flex-row'>
            <div className=' flex-1 mx-8 rounded-md overflow-hidden lg:w-1/4 lg:mx-0'>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='rounded-md lg:mx-6'
              />
            </div>
            <div className='flex-1 px-8 lg:w-3/4 mt-4 md:mt-0 md:pl-12 lg:flex-none'>
              <h3 className='text-bookmark-red text-2xl font-semibold lg:pb-6'>
                {movie.title}
              </h3>
              <p className='mb-2'>
                Rating: {movie.vote_average} / {movie.vote_count} votes
              </p>
              <p className='mb-2'>Duration: {formatTime(movie.runtime)}</p>
              <p className='mb-2'>
                Producers:{' '}
                {`${movie?.production_companies[0]?.name},${movie?.production_companies[0]?.origin_country}`}
              </p>
              <p className='mb-2'>Date Release: {movie.release_date}</p>
              <p>Overview: {movie.overview}</p>
            </div>
          </div>
          {video.length !== 0 ? (
            <div className='container mx-auto mb-8 lg:my-12'>
              <iframe
                className='w-10/12 h-72 mx-auto md:h-96 lg:w-4/5 lg:h-banner'
                src={`https://www.youtube-nocookie.com/embed/${
                  video[video.length - 1].key
                }`}
                frameBorder='0'
                title={video[video.length - 1].name}
                allowFullScreen
                allow='autoplay; picture-in-picture'
              ></iframe>
            </div>
          ) : (
            <p className='text-center text-2xl mb-4'>No trailer available</p>
          )}
          <div className='container mx-auto overflow-hidden'>
            <h2 className='text-bookmark-red ml-4 mb-4 text-3xl font-semibold lg:text-5xl lg:ml-5 lg:mb-12 font-roboto'>
              Recommend Movie:
            </h2>
            <div className='w-10/12 mx-auto mb-6 lg:mb-12 h-auto'>
              <Slider {...slickSettings}>
                {recommend?.map((movie) => (
                  <MovieDetailSliderItem
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
