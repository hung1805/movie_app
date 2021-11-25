import React from 'react';
import './spinner.css';

const Spinner = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-center'>
        <div className='sk-cube-grid'>
          <div className='bg-bookmark-purple sk-cube sk-cube1'></div>
          <div className='bg-bookmark-purple sk-cube sk-cube2'></div>
          <div className='bg-bookmark-purple sk-cube sk-cube3'></div>
          <div className='bg-bookmark-purple sk-cube sk-cube4'></div>
          <div className='bg-bookmark-purple sk-cube sk-cube5'></div>
          <div className='bg-bookmark-purple sk-cube sk-cube6'></div>
          <div className='bg-bookmark-purple sk-cube sk-cube7'></div>
          <div className='bg-bookmark-purple sk-cube sk-cube8'></div>
          <div className='bg-bookmark-purple sk-cube sk-cube9'></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
