import React from 'react';
import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';

function PublishContent({
  visibility,
  setVisibility,
  thumbnail,
  setThumbnail,
  tags,
  setTags,
}) {
  const { user } = useUser();

  async function handletags(e) {
    e.preventDefault();
    const tag = document.querySelector('#tags').value.trim();
    if (tags.length >= 3) alert('Max 3 Tags Allowed');
    else if (tag == '') alert('Enter Valid Tag');
    else setTags([...tags, tag]);
    document.querySelector('#tags').value = '';
  }

  return (
    <div
      className={`absolute inset-x-0 top-0 z-20 flex-col justify-between gap-y-10 bg-white px-15 py-7 ${visibility ? 'flex' : 'hidden'}`}
    >
      <button
        type='button'
        onClick={() => setVisibility(false)}
        className='absolute top-2 right-2 cursor-pointer'
      >
        <img className='size-7' src='/assets/xmark.svg' alt='' />
      </button>
      <div className='flex flex-col items-start gap-y-2'>
        <div className='flex items-center gap-x-5'>
          <p className='text-musablack/80 text-lg font-semibold'>
            Add Thumbnail
          </p>
          <label
            htmlFor='draganddropimage'
            className='text-md cursor-pointer rounded-sm border  border-black/10 px-5 py-1 text-center font-medium text-black/50'
          >
            Click to Upload Thumbnail.
          </label>
          <input
            onChange={(e) => setThumbnail(e.target.files[0])}
            type='file'
            id='draganddropimage'
            hidden
          />
        </div>

        {thumbnail && (
          <div className='relative flex h-70 w-[70%] items-center justify-center overflow-hidden rounded-sm border border-black/20 px-4'>
            <img
              src={URL.createObjectURL(thumbnail)}
              draggable='false'
              className='absolute w-full object-cover object-center'
            />
          </div>
        )}
      </div>
      <div className='flex flex-col items-start gap-y-2'>
        <p className='text-lg'>
          <img
            className='mr-1 inline-block size-5'
            src='/assets/page-star.svg'
            alt=''
          />
          Publishing By : <span className='font-semibold'>{user.fullName}</span>
        </p>
        <p className='text-md font-medium text-black/50'>
          Add tags to your blog/article let people know what's it about (max 3).
          <br />
          For Ex. <b>Tech, Finance.</b>
        </p>

        <div className='flex items-center gap-x-4'>
          <input
            type='text'
            id='tags'
            placeholder='Add Tags...'
            className='text-md mt-2 rounded-md border border-black/20 bg-[#fafafa] p-2 indent-3 outline-none'
          />
          {tags.map((tag, index) => (
            <button
              key={index}
              className='rounded-full border border-black/20 px-3 py-1 text-sm font-medium text-black/70'
            >
              {tag}
            </button>
          ))}
        </div>

        <div className='mt-1.5 flex gap-x-4'>
          <button
            type='button'
            onClick={handletags}
            className='text-md cursor-pointer rounded-full bg-blue-500 px-4 py-1 font-medium text-white transition duration-200 hover:bg-blue-600'
          >
            Add tag
          </button>
          <button
            type='submit'
            className='text-md cursor-pointer rounded-full bg-green-600 px-4 py-1 font-medium text-white transition duration-200 hover:bg-green-700'
          >
            Publish now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublishContent;
