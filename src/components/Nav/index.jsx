import React, { useState, useRef } from 'react';
import logo from '../../assets/imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const Nav = (props) => {
  const { setSearchText } = props;
  const [currentText, setCurrentText] = useState('');
  const searchRef = useRef();
  const navigate = useNavigate();
  const [mobileSearch, setMobileSearch] = useState(false);
  const handleShowMobileSearch = () => {
    setMobileSearch(!mobileSearch);
  };
  const handleCurrentTextChange = (e) => {
    setCurrentText(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (mobileSearch) setMobileSearch(false);
    setSearchText(currentText);
    setCurrentText('');
    navigate({ path: '/search', search: `?query=${currentText}` });
  };
  return (
    <nav
      className='w-full h-12 px-1 flex items-center md:h-16 lg:h-24 border-b-2
      shadow-sm bg-grey-100 z-20 fixed top-0 left-0 bg-white '
    >
      <div className='container mx-auto flex justify-between items-center'>
        <div className='w-11 h-11 overflow-hidden lg:w-16 lg:h-16'>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-full h-full object-cover' />
          </Link>
        </div>
        <div
          className='cursor-pointer text-green-600 lg:hidden mr-2'
          onClick={handleShowMobileSearch}
        >
          <FontAwesomeIcon icon={faSearch} />
        </div>
        {!mobileSearch ? null : (
          <div className='w-screen h-screen absolute top-0 left-0 bg-gray-100 z-30 flex flex-col items-center'>
            <span
              className='absolute top-0 right-0 mt-4 mr-4 block'
              onClick={handleShowMobileSearch}
            >
              <FontAwesomeIcon icon={faTimes} color='red' size='2x' />
            </span>
            <input
              ref={searchRef}
              type='text'
              value={currentText}
              onChange={handleCurrentTextChange}
              placeholder='Enter Movie Name...'
              className=' mr-8 px-2 border-b-2 border-grey-500 focus:border-black flex-none mt-24 py-3 mb-12 outline-none bg-transparent'
            />
            <button
              className='flex-none px-3 py-2 mx-32 bg-green-700 border-none rounded-md outline-none border-2 text-white uppercase font-medium'
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        )}
        <div className='hidden lg:block lg:mr-8'>
          <form>
            <input
              value={currentText}
              ref={searchRef}
              onChange={handleCurrentTextChange}
              type='text'
              placeholder='Enter Movie Name...'
              className='p-2 outline-none border-grey-400 border-b-2 focus:border-black placeholder-gray-500 placeholder-opacity-50'
            />
            <button
              type='submit'
              className='cursor-pointer text-green-600 hover:text-black'
              onClick={handleSearch}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
