import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import { UserButton } from '@clerk/clerk-react';

function AppNavbar() {
  const [visibility, setVisibility] = React.useState(false);

  return (
    <>
      <nav className='sticky top-0 left-0 right-0 z-20 flex w-screen items-center justify-between border-b border-black/10 bg-white px-7 py-2.5'>
        <div className='flex w-fit items-center gap-x-5'>
          <button
            onClick={() => setVisibility((visibility) => !visibility)}
            className='cursor-pointer'
          >
            <img src='/assets/menu.svg' alt='image' className='size-5.5' />
          </button>

          <Link to={'/'} className='mr-2 cursor-pointer text-3xl font-semibold'>
            <span className='font-merriweather font-bold'>L</span>uce
          </Link>
          <div className='flex w-fit items-center justify-between gap-x-2 rounded-full bg-[rgb(249,249,249)] px-4 py-1'>
            <img src='/assets/search.svg' alt='image' className='size-5.5' />
            <input
              type='text'
              placeholder='Search'
              className='caret-musablack placeholder:text-musablack/70 text-md w-50 p-1 font-medium outline-none'
            />
          </div>
        </div>

        <div className='flex w-fit items-center gap-x-12'>
          <Link to="/trending" className='text-md'>Trending</Link>
          <UserButton />
        </div>
      </nav>
      <Sidebar visibility={visibility} />
    </>
  );
}

export default AppNavbar;
