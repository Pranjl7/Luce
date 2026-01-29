import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reactions from '../ui/Reactions';

function Contentbox({
  thumbnail,
  title,
  contentimage,
  content,
  likes,
  comments,
  createdat,
  author,
}) {
  const [image, setImage] = useState(false);

  useEffect(() => {
    if (thumbnail != null || contentimage != null) setImage(true);
  }, [thumbnail, contentimage]);

  return (
    <Link
      to={`/${author.emailid}/${title}`}
      className='flex w-full items-center justify-between overflow-hidden border-b border-black/10 pb-4'
    >
      {/* Content-side */}
      <div className='mt-5 flex w-[70%] flex-col gap-y-4 overflow-hidden py-4'>
        <div className='flex items-center gap-x-2'>
          <img
            className='size-5.5 rounded-full'
            src={author.avatarurl}
            alt='profile-logo'
          />
          <p className='text-center text-sm'>
            {author.username}
            <img
              src='/assets/verified.svg'
              alt='image'
              className='ml-1 inline-block size-4'
            />
          </p>
        </div>
        <div className='flex w-full flex-col gap-y-2'>
          <h1 className='font-merriweather line-clamp-3 max-h-24 w-full overflow-hidden text-2xl font-bold tracking-tight'>
            {title}
          </h1>
          <p className='text-md line-clamp-2 max-h-10 w-full overflow-hidden leading-5 font-medium text-black/70'>
            {content}
          </p>
        </div>

        <div className='flex items-center justify-between'>
          <Reactions likes={likes} comments={comments} />
          <div className='flex items-center gap-x-4'>
            <p className='text-sm text-black/70'>{createdat}</p>
            <img
              className='size-6'
              src='/assets/bookmark-light.svg'
              alt='image'
            />
          </div>
        </div>
      </div>

      {/* Image-side */}
      {image && (
        <div className='w-[22%]'>
          <img
            draggable='false'
            loading='lazy'
            className='aspect-16/10 w-full object-cover object-center'
            src={thumbnail != null ? thumbnail : contentimage}
            alt=''
          />
        </div>
      )}
    </Link>
  );
}

export default Contentbox;
