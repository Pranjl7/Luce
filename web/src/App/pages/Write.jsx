import React from 'react';

function Write() {
  return (
    <main className='mx-auto flex max-h-[90vh] max-w-3xl flex-col gap-y-8 border-x border-black/10'>
      <div className='flex w-full items-center justify-between px-4 py-2'>
        <div className='flex items-center gap-x-4'>
          <button className='flex cursor-pointer items-center justify-center rounded-full border border-black/40 p-2'>
            <label htmlFor='inputimage' className='cursor-pointer'>
              <img className='size-5' src='/assets/add-image.svg' alt='' />
            </label>
            <input type='file' name='' id='inputimage' hidden />
          </button>
          <p className='hidden text-sm text-black/70'>Saving...</p>
          <p className='hidden text-sm text-black/70'>Saved</p>
        </div>
        <button className='text-md max-h-[90vh] cursor-pointer rounded-full bg-green-600 px-4 py-1 font-medium text-white transition duration-200 hover:bg-green-700'>
          Publish
        </button>
      </div>
      <div className='flex flex-col gap-y-5 px-4'>
        <textarea
          name='inputtitle'
          id='inputtitle'
          rows={1}
          className='text-musablack font-merriweather w-full resize-none overflow-hidden text-4xl font-semibold outline-none placeholder:text-black/30'
          placeholder='Title here...'
          onChange={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
          }}
        />
        <textarea
          name='inputcontent'
          id='inputcontent'
          rows={1}
          className='w-full resize-none overflow-hidden text-xl outline-none placeholder:font-medium placeholder:text-black/30'
          placeholder='Share thoughts...'
          onChange={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
          }}
        />
      </div>
    </main>
  );
}

export default Write;
