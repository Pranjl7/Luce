import React from 'react';
import { Link } from 'react-router-dom';
import HomePageReactions from '../ui/Homepage-Reactions';

function Contentbox() {
  return (
    <Link
      to={'/contentpage'}
      className='flex w-full items-center justify-between overflow-hidden border-b border-black/10 pb-4'
    >
      {/* Content-side */}
      <div className='mt-5 flex w-[70%] flex-col gap-y-4 overflow-hidden py-4'>
        <div className='flex items-center gap-x-2'>
          <img
            className='size-5.5 rounded-full'
            src='https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18zOElOdExZY1NmS3VzWGNNWVdtQ1VjZmtNMEIifQ?width=160'
            alt=''
          />
          <p className='text-sm'>Pranjal Bhatt </p>
        </div>
        <div className='flex w-full flex-col gap-y-2'>
          <h1 className='font-merriweather line-clamp-3 max-h-24 w-full overflow-hidden text-2xl font-bold tracking-tight'>
            Why Backpressure Is the Real Control Plane in Distributed Systems
          </h1>
          <p className='text-md line-clamp-2 max-h-10 w-full overflow-hidden leading-5 font-medium text-black/70'>
            Most distributed systems don't fail because of bugs. They fail
            because they get overwhelmed.
          </p>
        </div>

        <HomePageReactions />
      </div>

      {/* Image-side */}
      <div className='w-[22%]'>
        <img
          className='aspect-16/10 w-full object-cover object-center'
          src='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*_wP-8RMyqNTprWKG'
          alt=''
        />
      </div>
    </Link>
  );
}

export default Contentbox;