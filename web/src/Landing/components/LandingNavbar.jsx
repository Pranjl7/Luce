import React from 'react';
import { Link } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';

function LandingNavbar() {

  const { openSignIn, openSignUp } = useClerk();
  return (
    <nav className='flex items-center justify-between border-b border-black/20 py-3'>
      <div className='cursor-pointer text-3xl font-semibold'>
        <span className='font-merriweather font-bold'>L</span>uce
      </div>

      <div className='flex items-center gap-x-4'>
        <Link className='text-md mr-3 font-semibold' to='#'>
          Write
        </Link>
        <button onClick={() => openSignIn()} className='hidden cursor-pointer rounded-full border border-black/40 px-5 py-1 text-lg font-semibold md:block'>
          Log in
        </button>
        <button onClick={() => openSignUp()} className='text-md bg-musablack hidden cursor-pointer rounded-full px-6 py-2 font-semibold tracking-wider text-white transition duration-200 hover:bg-neutral-800 md:block'>
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default LandingNavbar;
