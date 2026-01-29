import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentPageReactions from '../ui/Contentpage-Reactions';

function ContentPage() {
  const [user, setUser] = useState({});
  const [content, setContent] = useState({});
  const { useremailid, contenttitle } = useParams();

  useEffect(() => {
    fetchspecificcontent();
  }, []);

  async function fetchspecificcontent() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/public/${useremailid}/${contenttitle}`
      );
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
      } else {
        setUser({ ...data.message });
        setContent({
          ...data.message.usercontents.find((e) => e.title == contenttitle),
        });
        console.log(content);
      }
    } catch (error) {
      console.log(error);
      alert('Error :' + error.message);
    }
  }

  return (
    <main className='scrollbar-simple mx-auto flex max-h-[90vh] max-w-172 flex-col gap-y-8 overflow-auto pt-4 pr-2'>
      <div className='flex flex-col gap-y-7'>
        {content.tags && (
          <div className='flex gap-x-3'>
            {content.tags.map((tag, index) => (
              <button
                key={index}
                className='rounded-full border border-black/20 px-3 py-1 text-sm font-medium text-black/70'
              >
                {tag}
              </button>
            ))}
          </div>
        )}
        <h1
          id='titlebox'
          className='font-merriweather w-full text-4xl leading-12 font-bold tracking-tight whitespace-pre-wrap'
        >
          {content.title}
        </h1>

        <ContentPageReactions user={user} content={content} />
      </div>

      {content.contentimage && (
        <img
          draggable='false'
          loading='lazy'
          id='content-image'
          className='w-full object-cover object-center'
          src={content.contentimage}
          alt=''
        />
      )}

      <div
        id='contentbox'
        className='font-merriweather w-full text-lg leading-8 tracking-wide whitespace-pre-wrap text-black/80'
      >
        {content.content}
      </div>

      <div className='mt-5 flex items-center justify-center gap-x-1 py-2 text-sm tracking-wide'>
        <p>Build and designed by</p>
        <a className='underline' href='https://github.com/Pranjl7'>
          Pranjal
        </a>
        <img
          className='inline-block size-3.5'
          src='/assets/heart-dark.svg'
          alt=''
        />
      </div>
    </main>
  );
}

export default ContentPage;
