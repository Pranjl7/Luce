import React from 'react';
import { Link } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';

function LandingFooter() {

  const { openSignUp } = useClerk()
  const links = [
    {
      title: 'Terms',
      href: '#',
    },
    {
      title: 'Policy',
      href: '#',
    },
    {
      title: 'Membership',
      href: '#',
    },
    {
      title: 'Blog',
      href: '#',
    },
  ];

  return (
    <footer className='absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-black/20 py-3'>
      <div className='flex items-center gap-x-7'>
        {links.map((e, index) => (
          <Link to={index} key={e.index} className='text-md font-medium'>
            {e.title}
          </Link>
        ))}
      </div>
      <button onClick={() => openSignUp()} className='cursor-pointer'>
        <img className='size-11' src='/assets/arrow-right-circle.svg' alt='' />
      </button>
    </footer>
  );
}

export default LandingFooter;
