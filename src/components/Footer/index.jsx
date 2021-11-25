import React from 'react';
const Footer = () => {
  return (
    <footer className='w-full bg-bookmark-purple py-8'>
      <div className='flex flex-1 flex-col justify-centernp ml-12 md:flex-row  md:justify-around gap-8'>
        <ul className='flex flex-col text-white gap-2 text-xs'>
          <li className='cursor-pointer hover:underline'>Popular Movie</li>
          <li className='cursor-pointer hover:underline'>Hot Movie</li>
          <li className='cursor-pointer hover:underline'>Avanger Movie</li>
        </ul>
        <ul className='flex flex-col text-white gap-2 text-xs'>
          <li className='cursor-pointer hover:underline'>Anime&amp;Manga</li>
          <li className='cursor-pointer hover:underline'>TV Show</li>
          <li className='cursor-pointer hover:underline'>Upcoming Movie</li>
          <li className='cursor-pointer hover:underline'>Trailer</li>
        </ul>
        <ul className='flex flex-col text-white gap-2 text-xs'>
          <li className='text-bookmark-blue text-lg'>Terms:</li>
          <li className='cursor-pointer hover:underline'>Cookies</li>
          <li className='cursor-pointer hover:underline'>Security</li>
          <li className='cursor-pointer hover:underline'>Your Responsibilities</li>
        </ul>
      </div>
      <div className='mt-8 text-center'>
        &copy;2021 Copyright by &#160;
        <span className='text-bookmark-red cursor-pointer inline'>Me</span>
        &#160;. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
