import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Library from '../pages/Library';
import Profile from '../pages/Profile';
import Write from '../pages/Write';
import ContentPage from '../pages/ContentPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contentpage' element={<ContentPage />} />
      <Route path='/me/library' element={<Library />} />
      <Route path='/me/profile' element={<Profile />} />
      <Route path='/me/write' element={<Write />} />
    </Routes>
  );
}

export default AppRoutes;
