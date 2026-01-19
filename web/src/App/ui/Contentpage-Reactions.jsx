import React from 'react';
import Reactions from './Reactions';

function ContentPageReactions() {
  return (
    <div className='flex w-full justify-between border-y border-black/10 py-3'>
      <div className='flex items-center gap-x-5'>
        <p className='text-md font-medium text-black/70'>
          <img
            className='mr-2 inline-block size-8 rounded-full'
            src='https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18zOElOdExZY1NmS3VzWGNNWVdtQ1VjZmtNMEIifQ?width=160'
            alt=''
          />
          Pranjal Bhatt
        </p>
        <button className='text-md fond-medium cursor-pointer rounded-full border border-black/80 px-4 py-1'>
          Follow
        </button>
      </div>
      <Reactions />
    </div>
  );
}

export default ContentPageReactions;
