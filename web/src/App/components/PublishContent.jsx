import React from 'react';
import { useState } from 'react';

function PublishContent({ visibility, setVisibility }) {
  const [image, setImage] = useState(null);

  return (
    <div
      className={`absolute inset-x-0 top-0 z-20 flex-col justify-between gap-y-10 bg-white px-15 py-7 ${visibility ? 'flex' : 'hidden'}`}
    >
      <button
        onClick={() => setVisibility(false)}
        className='absolute top-2 right-2 cursor-pointer'
      >
        <img className='size-6' src='/assets/xmark.svg' alt='' />
      </button>
      <div className='flex flex-col items-start gap-y-2'>
        <p className='text-musablack/80 text-lg font-semibold'>Add Thumbnail</p>
        <div className='flex h-50 w-[70%] items-center justify-center rounded-sm border border-black/20 px-4'>
          <label
            htmlFor='draganddropimage'
            className='text-md cursor-pointer rounded-sm border border-black/10 px-5 py-1 text-center font-medium text-black/50'
          >
            Click to Upload Thumbnail.
          </label>
          <input
            onChange={(e) => setImage(e.target.value)}
            type='file'
            id='draganddropimage'
            className='hidden'
          />
        </div>
      </div>
      <div className='flex flex-col items-start gap-y-2'>
        <p className='text-lg'>
          <img
            className='mr-1 inline-block size-5'
            src='/assets/page-star.svg'
            alt=''
          />
          Publishing By : <span className='font-semibold'>Pranjal Bhatt</span>
        </p>
        <p className='text-md font-medium text-black/50'>
          Add tags to your blog/article let people know what's it about (max 3).
          <span>
            For Ex. <b>Tech, Finance</b>
          </span>
        </p>
        <input
          type='text'
          placeholder='Add Tags...'
          className='text-md mt-2 rounded-md border border-black/20 bg-[#fafafa] p-2 indent-3 outline-none'
        />
        <div className='mt-1.5 flex gap-x-4'>
          <button className='text-md cursor-pointer rounded-full bg-blue-500 px-4 py-1 font-medium text-white transition duration-200 hover:bg-blue-600'>
            Add tag
          </button>
          <button className='text-md cursor-pointer rounded-full bg-green-600 px-4 py-1 font-medium text-white transition duration-200 hover:bg-green-700'>
            Publish now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublishContent;
