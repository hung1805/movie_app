import axios from 'axios';

//Base URL to get movie data
export const movieAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

//Base URL resize image movie item 1280
export const resizeAxios = axios.create({
  baseURL: 'https://image.tmdb.org/t/p/',
});

//Get movie's poster width 500
export const posterAxios = axios.create({
  baseURL: 'https://image.tmdb.org/t/p/w500',
});
//Fetch A Movie upon Id
export const fetchMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
});
export const getParam = (type) => {
  switch (type) {
    case 'upcoming-movie':
      return `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    case 'top-rating':
      return `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    case 'treding-movie':
      return `/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`;

    default:
      break;
  }
};
export const searchMovie = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie`,
});
