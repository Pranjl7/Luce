import React from 'react';
import Reactions from './Reactions';

function HomePageReactions() {
  return (
    <div className='flex items-center justify-between'>
      <Reactions />
      <div className='flex items-center gap-x-4'>
        <p className='text-sm text-black/70'>12 Apr, 2006</p>
        <img className='size-6' src='/assets/bookmark-light.svg' alt='image' />
      </div>
    </div>
  );
}

export default HomePageReactions;