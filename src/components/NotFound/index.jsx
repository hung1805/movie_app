import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../../assets/imgs/404.jpg';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full py-16 overflow-hidden flex flex-col items-center justify-center bg-white lg:flex-row'>
      <img
        src={notFound}
        alt='404 not found resourses'
        className='mx-4 lg:w-1/2 lg:mt-12 lg:mr-16 shadow-xl rounded-md'
      />
      <button
        className='btn mt-6 bg-white border-black border-2 text-green-700 uppercase font-medium hover:bg-green-700 hover:text-black hover:border-transparent md:mt-4 lg:mt-8 mb-9'
        onClick={() => {
          navigate('/');
        }}
      >
        Back to home
      </button>
    </div>
  );
};

export default NotFound;
