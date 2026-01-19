import React from 'react'

function Reactions() {
  return (
    <div className='flex items-center gap-x-5'>
        <div className='flex items-center gap-x-1 cursor-pointer'>
          <img className='size-4' src='/assets/heart-dark.svg' alt='image' />
          <p className='text-sm text-black/70'>10</p>
        </div>
        <div className='flex items-center gap-x-1 cursor-pointer'>
          <img className='size-4' src='/assets/comment-dark.svg' alt='image' />
          <p className='text-sm text-black/70'>10</p>
        </div>
      </div>
  )
}

export default Reactions