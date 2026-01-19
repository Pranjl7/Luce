import React from 'react';
import LandingNavbar from '../components/LandingNavbar';
import LandingFooter from '../components/LandingFooter';
import Hero from '../components/Hero';

function LandingLayout() {
  return (
    <div className='font-baloo relative mx-auto min-h-screen max-w-6xl'>
      <LandingNavbar />
      <Hero />
      <LandingFooter />
    </div>
  );
}

export default LandingLayout;
