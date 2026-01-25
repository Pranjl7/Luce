import React from 'react';
import PublishContent from '../components/PublishContent';
import { useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { redirect } from 'react-router-dom';

function Write() {
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState('');
  const [contentimage, setContentimage] = useState(null);
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);

  const [visibility, setVisibility] = useState(false);
  const { getToken } = useAuth();

  async function createcontent(e) {
    e.preventDefault();
    try {
      if (title == '' && content == '') {
        alert('Enter required fields.');
        setVisibility(false);
        return;
      } else if (title == '') {
        alert('Title field is empty.');
        setVisibility(false);
        return;
      } else if (content == '') {
        alert('Content field is empty.');
        setVisibility(false);
        return;
      }

      const token = await getToken();
      const formdata = new FormData();
      if (thumbnail) formdata.append('thumbnail', thumbnail);
      formdata.append('tags', tags);
      formdata.append('title', title.trim());
      if (contentimage) formdata.append('contentimage', contentimage);
      formdata.append('content', content.trim());

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/content/create`,
        {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: formdata,
        }
      );

      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert(`Error: ${error.message}`);
    }
  }

  return (
    <>
      <form
        onSubmit={createcontent}
        className='scrollbar-simple relative mx-auto flex h-[90vh] max-w-200 flex-col gap-y-8 overflow-auto'
      >
        <div className='flex w-full items-center justify-between bg-white px-4 py-3'>
          <div className='flex items-center gap-x-2'>
            <label
              htmlFor='inputimage'
              className='cursor-pointer rounded-full border border-black/40 p-2'
            >
              <img className='size-5' src='/assets/add-image.svg' alt='' />
            </label>
            <input
              type='file'
              id='inputimage'
              onChange={(e) => setContentimage(e.target.files[0])}
              hidden
            />
            <p className='text-sm text-black/70'>Add Image</p>
            <p className='ml-2 hidden text-sm text-black/70'>Saving...</p>
            <p className='hidden text-sm text-black/70'>Saved</p>
          </div>
          <button
            type='button'
            onClick={() => setVisibility(true)}
            className='text-md cursor-pointer rounded-full bg-green-600 px-4 py-1 font-medium text-white transition duration-200 hover:bg-green-700'
          >
            Publish
          </button>
        </div>
        <div className='flex flex-col gap-y-7 px-4 pb-15'>
          <textarea
            id='inputtitle'
            rows={1}
            value={title}
            className='text-musablack font-merriweather w-full resize-none overflow-hidden text-4xl leading-12 font-semibold outline-none placeholder:text-black/30'
            placeholder='Title here...'
            onChange={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
              setTitle(e.target.value);
            }}
          />

          {contentimage && (
            <img
              className='w-full object-cover object-center'
              src={URL.createObjectURL(contentimage)}
              alt='ContentImage'
            />
          )}

          <textarea
            id='inputcontent'
            rows={1}
            value={content}
            className='font-merriweather w-full resize-none overflow-hidden text-xl leading-8 tracking-wide outline-none placeholder:font-medium placeholder:text-black/30'
            placeholder='Share thoughts...'
            onChange={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
              setContent(e.target.value);
            }}
          />
        </div>
        <PublishContent
          visibility={visibility}
          setVisibility={setVisibility}
          thumbnail={thumbnail}
          setThumbnail={setThumbnail}
          tags={tags}
          setTags={setTags}
        />
      </form>
    </>
  );
}

export default Write;
