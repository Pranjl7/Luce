import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomePageReactions from '../ui/Homepage-Reactions';

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
      to={'/contentpage'}
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
          <p className='text-sm'>{author.username}</p>
        </div>
        <div className='flex w-full flex-col gap-y-2'>
          <h1 className='font-merriweather line-clamp-3 max-h-24 w-full overflow-hidden text-2xl font-bold tracking-tight'>
            {title}
          </h1>
          <p className='text-md line-clamp-2 max-h-10 w-full overflow-hidden leading-5 font-medium text-black/70'>
            {content}
          </p>
        </div>

        <HomePageReactions
          likes={likes}
          comments={comments}
          createdat={createdat}
        />
      </div>

      {/* Image-side */}
      {image && (
        <div className='w-[22%]'>
          <img
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
