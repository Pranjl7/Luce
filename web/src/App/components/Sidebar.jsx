import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar({ visibility }) {
  const [mount, setMount] = React.useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  const links = [
    {
      svgdark: '/assets/home-dark.svg',
      svglight: '/assets/home-light.svg',
      title: 'Home',
      href: '/',
    },
    {
      svgdark: '/assets/library-dark.svg',
      svglight: '/assets/library-light.svg',
      title: 'Bookmarks',
      href: '/me/library',
    },
    {
      svgdark: '/assets/profile-dark.svg',
      svglight: '/assets/profile-light.svg',
      title: 'Profile',
      href: '/me/profile',
    },
    {
      svgdark: '/assets/following-dark.svg',
      svglight: '/assets/following-light.svg',
      title: 'Following',
      href: '/me/following',
    },
    {
      svgdark: '/assets/write-dark.svg',
      svglight: '/assets/write-light.svg',
      title: 'Write',
      href: '/me/write',
    },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-10 h-screen w-55 border-r border-black/10 transition-transform duration-300 ease-in-out bg-white ${mount ? '' : 'transition-none'} ${visibility ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className='mt-25 flex w-full flex-col gap-y-5'>
        {links.map((e, index) => (
          <NavLink
            to={e.href}
            key={index}
            className={({ isActive }) =>
              `hover:text-musablack flex h-fit gap-x-4 pl-6 ${isActive ? 'text-musablack ml-1 border-l' : 'text-[#797374]'}`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={isActive ? e.svgdark : e.svglight}
                  alt='image'
                  className='size-5.5'
                />
                <p className='text-lg font-medium tracking-tight'>{e.title}</p>
              </>
            )}
          </NavLink>
        ))}
        <div className='mx-6 border-t border-black/10'></div>
      </div>
    </div>
  );
}

export default Sidebar;
