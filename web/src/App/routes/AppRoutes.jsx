import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Library from '../pages/Library';
import Write from '../pages/Write';
import ContentPage from '../pages/ContentPage';
import Stats from '../pages/Stats';
import Trending from '../pages/Trending';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:useremailid/:contenttitle' element={<ContentPage />} />
      <Route path='/me/library' element={<Library />} />
      <Route path='/me/trending' element={<Trending />} />
      <Route path='/me/stats' element={<Stats />} />
      <Route path='/me/write' element={<Write />} />
    </Routes>
  );
}

export default AppRoutes;
