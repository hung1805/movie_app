import React, { useState, lazy, Suspense } from 'react';
import NotFound from './components/NotFound';
import Footer from './components/Footer/index';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Nav from './components/Nav';
import Spinner from './components/Spinner';

const LazySearchPage = lazy(() => import('./pages/SearchPage'));
const LazyHomePage = lazy(() => import('./pages/HomePage'));
const LazyDetailPage = lazy(() => import('./pages/MovieDetail'));

function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <div className='w-full h-screen'>
      <Suspense fallback={<Spinner />}>
        <Nav searchText={searchText} setSearchText={setSearchText} />
        <Routes>
          <Route path='/' element={<LazyHomePage />} />
          <Route path='movie/:id' element={<LazyDetailPage />} />
          <Route path='/search' element={<LazySearchPage searchText={searchText} />} />
          <Route path='/notfound' element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
