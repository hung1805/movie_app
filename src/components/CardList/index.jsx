import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { getParam, movieAxios } from '../../api/axios';
import { formatString } from '../../utils/util';
import CardItem from '../CardItem';
import Spinner from '../Spinner';

const CardList = (props) => {
  const { type } = props;
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const { results } = await (
          await movieAxios.get(`${getParam(type)}&page=${page}`)
        ).data;
        await setList((list) => [...list, ...results]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [page, type]);
  const onLoadMore = () => {
    setPage((page) => page + 1);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='container mx-auto mt-12'>
      <h2 className=' text-4xl text-bookmark-red font-roboto font-md pl-8 lg:mb-12 lg:pl-4 tracking-wider lg:font-semibold lg:text-6xl'>
        {`${formatString(type)}:`}
      </h2>
      <div className='px-8 sm:px-0 py-4 grid gap-y-8 gap-x-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:mt-42 lg:p-4'>
        {list?.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            poster_path={item.poster_path}
            title={item.title}
            rating={item.vote_average}
          />
        ))}
      </div>
      <div className='container mx-auto px-8'>
        <button
          className=' btn mt-6 bg-green-700 border-transparent border-2 text-white uppercase font-medium color-white hover:color-black hover:bg-green-700 hover:text-black hover:border-transparent md:mt-4 lg:mt-8 mb-9'
          onClick={onLoadMore}
        >
          LoadMore
          <FontAwesomeIcon icon={faLongArrowAltRight} size='1x' className='ml-2' />
        </button>
      </div>
    </div>
  );
};

export default CardList;
