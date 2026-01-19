import React from 'react';
import { NavLink } from 'react-router-dom';
import Contentbox from '../components/Contentbox';

function Home() {
  const links = [
    {
      title: 'For you',
      href: '/',
    },
    {
      title: 'Trending',
      href: '/trending',
    },
  ];

  return (
    <main className='scrollbar-simple relative mx-auto max-h-[90vh] max-w-208 overflow-y-auto border-r border-black/10 pr-20'>
      <nav className='text-md sticky top-0 mt-6 flex gap-x-8 border-b border-black/10 bg-white py-4 font-medium tracking-wide'>
        {links.map((e, i) => (
          <NavLink
            key={i}
            to={e.href}
            className={({ isActive }) =>
              isActive ? 'text-musablack' : 'text-black/70'
            }
          >
            {e.title}
          </NavLink>
        ))}
      </nav>

      <Contentbox />
      <Contentbox />
      <Contentbox />
    </main>
  );
}

export default Home;
