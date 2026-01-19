import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppRoutes from '../routes/AppRoutes';

function AppLayout() {
  return (
    <div className='font-baloo relative min-h-screen max-w-screen'>
      <AppNavbar />
      <AppRoutes />
    </div>
  );
}

export default AppLayout;
