import LandingLayout from './Landing/layout/LandingLayout';
import AppLayout from './App/layout/AppLayout';
import {
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react';

function Root() {
  return (
    <div className='font-baloo relative min-h-screen'>
      <SignedOut>
        <LandingLayout />
      </SignedOut>
      <SignedIn>
      <AppLayout />
      </SignedIn>
    </div>
  );
}

export default Root;
