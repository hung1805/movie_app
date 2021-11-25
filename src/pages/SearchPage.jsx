import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovie } from '../api/axios.js';
import CardItem from '../components/CardItem/index.jsx';
import Spinner from '../components/Spinner/index.jsx';

const SearchPage = (props) => {
  const { searchText } = props;
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (searchText === '') {
      navigate('/');
    } else {
      const loadSearchResults = async () => {
        try {
          const { data } = await searchMovie(
            `?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}`
          );
          setIsLoading(true);
          await setResults(data.results);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      loadSearchResults();
      return () => {
        setResults([]);
      };
    }
  }, [searchText, navigate]);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className='mt-16 md:mt-18 lg:mt-28 mb-8 lg:mb-12'>
      {results.length !== 0 ? (
        <div className='container mx-auto mt-12'>
          <h2 className=' text-4xl text-bookmark-red font-roboto font-md pl-8 lg:mb-12 lg:pl-4 tracking-wider lg:font-semibold lg:text-6xl'>
            {`Search Results for "${searchText}":`}
          </h2>
          <div className='px-8 py-4 grid gap-y-8 gap-x-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:mt-42 lg:p-4'>
            {results.map((item) => (
              <CardItem
                key={item.id}
                id={item.id}
                poster_path={item.poster_path}
                title={item.title}
                name={item.name}
                rating={item.vote_average}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className='w-full h-screen'>
          <p className='text-bookmark-red text-2xl lg:text-4xl mt-16 md:mt-24 lg:mt-32'>
            No results for {searchText}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
