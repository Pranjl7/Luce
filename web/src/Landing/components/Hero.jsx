import React from 'react';
import Box from './Box';
import { useClerk } from '@clerk/clerk-react';

function Hero() {
  const boxes = [
    {
      boxbg: '#5ecc9f',
      textcolor: '#171717',
      h1: 'WRITTING',
      h2: 'Focused Writting',
      paragraph:
        'A clean, distraction-free editor for long-form thinking and clarity.',
      percent: 'Start Writing',
      arrowcolor: 'white',
      arrowbg: 'black',
    },
    {
      boxbg: '#0a0a0a',
      textcolor: '#FAFAFA',
      h1: 'PUBLISHING',
      h2: 'Instant Publishing',
      paragraph:
        'Publish your thoughts and share them with the world effortlessly.',
      percent: 'Start Publishing',
      arrowcolor: 'black',
      arrowbg: 'white',
    },
    {
      boxbg: '#ca9bfb',
      textcolor: '#171717',
      h1: 'DISCOVERY',
      h2: 'Thoughtful Discovery',
      paragraph:
        'Explore meaningful blogs, curated by quality not algorithms.',
      percent: 'Explore Now',
      arrowcolor: 'white',
      arrowbg: 'black',
    },
    {
      boxbg: '#f9fc91',
      textcolor: '#171717',
      h1: 'COMMUNITY',
      h2: 'Growing Audience',
      paragraph:
        'Connect with readers, get feedback, and build your voice over time.',
      percent: 'Join the Community',
      arrowcolor: 'white',
      arrowbg: 'black',
    },
  ];

  return (
    <div className='mt-8 flex w-full flex-col items-center gap-y-6'>
      <p className='font-merriweather max-w-4xl text-center text-5xl leading-17 font-bold tracking-tight'>
        Create, Explore and
        <br /> Connect Through Thoughtful Writing.
      </p>

      <div className='flex w-fit items-center justify-between gap-x-3'>
        <div className='border-musablack flex w-fit items-center justify-between gap-x-4 rounded-full border px-4 py-1'>
          <img src='/assets/kite.svg' alt='image' className='size-5' />
          <input
            type='text'
            placeholder='Your Email'
            className='caret-musablack placeholder:text-musablack w-70 p-1 text-[17px] font-semibold outline-none'
          />
        </div>

        <button className='text-md bg-musablack hidden cursor-pointer rounded-full px-6 py-2.5 font-semibold tracking-wider text-white transition duration-200 hover:bg-neutral-800 md:block'>
          Sign Up
        </button>
      </div>

      <div className='mt-5 flex max-w-full flex-col gap-y-2'>
        <div className='w-full text-2xl font-bold'>Featured Pillars</div>
        <div className='mx-auto grid w-full grid-cols-4 gap-x-5'>
          {boxes.map((box, index) => (
            <Box key={index} {...box} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
