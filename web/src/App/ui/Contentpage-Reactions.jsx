import React from 'react';
import Reactions from './Reactions';

function ContentPageReactions({user, content}) {
  return (
    <div className='flex w-full justify-between border-y border-black/10 py-3'>
      <div className='flex items-center gap-x-5'>
        <p className='text-md font-medium text-black/70'>
          <img
            className='mr-2 inline-block size-8 rounded-full'
            src={user.avatarurl}
            alt='image'
          />
          {user.username}
          <img
              src='/assets/verified.svg'
              alt='image'
              className='ml-1 inline-block size-4'
            />
        </p>
        <button className='text-md fond-medium cursor-pointer rounded-full border border-black/80 px-4 py-1'>
          Follow
        </button>
      </div>
      <div className='flex items-center gap-x-5'>
      <div className='flex cursor-pointer items-center gap-x-1'>
        <img className='size-4' src='/assets/heart-dark.svg' alt='image' />
        <p className='text-sm text-black/70'>{content.likes}</p>
      </div>
      <div className='flex cursor-pointer items-center gap-x-1'>
        <img className='size-4' src='/assets/comment-dark.svg' alt='image' />
        <p className='text-sm text-black/70'>{content.comments}</p>
      </div>
    </div>
    </div>
  );
}

export default ContentPageReactions;
