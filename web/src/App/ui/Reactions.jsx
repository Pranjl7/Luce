import React from 'react';

function Reactions({ likes, comments}) {
  return (
    <div className='flex items-center gap-x-5'>
      <div className='flex cursor-pointer items-center gap-x-1'>
        <img className='size-4' src='/assets/eye.svg' alt='image' />
        <p className='text-sm text-black/70'>1 Views</p>
      </div>
      <div className='flex cursor-pointer items-center gap-x-1'>
        <img className='size-4' src='/assets/heart-light.svg' alt='image' />
        <p className='text-sm text-black/70'>{likes}</p>
      </div>
      <div className='flex cursor-pointer items-center gap-x-1'>
        <img className='size-4' src='/assets/comment-light.svg' alt='image' />
        <p className='text-sm text-black/70'>{comments.length}</p>
      </div>
    </div>
  );
}

export default Reactions;
