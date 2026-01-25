import React, { useEffect } from 'react';
import Reactions from './Reactions';

function HomePageReactions({ likes, comments, createdat }) {
  return (
    <div className='flex items-center justify-between'>
      <Reactions likes={likes} comments={comments} />
      <div className='flex items-center gap-x-4'>
        <p className='text-sm text-black/70'>{createdat}</p>
        <img className='size-6' src='/assets/bookmark-light.svg' alt='image' />
      </div>
    </div>
  );
}

export default HomePageReactions;
