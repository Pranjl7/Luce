import React from 'react';
import AppNavbar from '../components/AppNavbar';
import AppRoutes from '../routes/AppRoutes';
import { useUser, useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import axios from 'axios';

function AppLayout() {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      usersignedin();
    }
  }, [isLoaded, isSignedIn]);

  async function usersignedin() {
    const token = await getToken();

    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/user/sync`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }
  return (
    <div className='font-baloo relative min-h-screen max-w-screen'>
      <AppNavbar />
      <AppRoutes />
    </div>
  );
}

export default AppLayout;
