import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import MajorPieChart from '../components/charts/MajorPieChart';
import RingChart from '../components/charts/RingChart';
import { Link, NavLink } from 'react-router-dom';

function Stats() {
  const [user, setUser] = useState({});
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [showcontent, setShowcontent] = useState(false);
  const [showfollowers, setShowfollowers] = useState(false);
  const [showfollowing, setShowfollowing] = useState(false);

  const { getToken } = useAuth();

  useEffect(() => {
    fetchuserdata();
  }, []);

  async function fetchuserdata() {
    try {
      const token = await getToken();
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/stats`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      response.data.message.usercontents.map((e) =>
        setViews((views) => views + e.views)
      );
      response.data.message.usercontents.map((e) =>
        setLikes((likes) => likes + e.likes)
      );
      response.data.message.usercontents.map((e) =>
        setComments((comments) => comments + e.comments.length)
      );

      setUser({ ...response.data.message });
    } catch (error) {
      console.log(error);
      alert('Error :' + error.message);
    }
  }

  return (
    <main className='relative mx-auto flex max-w-3xl flex-col gap-y-8 p-5'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='font-merriweather text-3xl font-medium'>
            {user.username}
            <img
              src='/assets/verified.svg'
              alt='image'
              className='ml-2 inline-block size-8'
            />
          </h1>
          <p className='text-md font-medium text-black/50'>
            joined : {user.createdat}
          </p>
        </div>

        <img
          loading='lazy'
          draggable={false}
          className='size-35 rounded-full object-cover object-center'
          src={user.avatarurl}
          alt='avatar'
        />
      </div>
      <div className='flex w-full items-center justify-between border-y border-black/10 py-4 text-black/70'>
        <div className='relative'>
          <button
            className='cursor-pointer'
            onClick={() => setShowcontent((e) => !e)}
          >
            Contents{' '}
            {showcontent ? (
              <img
                className='inline-block size-4'
                src='/assets/arrow-up.svg'
                alt='icon'
              />
            ) : (
              <img
                className='inline-block size-4'
                src='/assets/arrow-down.svg'
                alt='icon'
              />
            )}
          </button>

          {showcontent && (
            <div className='absolute top-8 z-20 flex h-fit w-100 flex-col gap-y-3 overflow-y-auto rounded-md border border-black/10 bg-[white] px-3 py-4 transition duration-400'>
              {user.usercontents.length === 0 ? (
                <p className='text-sm text-black/70'>No content yet</p>
              ) : (
                user.usercontents &&
                user.usercontents.map((e) => (
                  <Link
                    to={`/${user.emailid}/${e.title}`}
                    className={'cursor-pointer font-medium'}
                  >
                    <img
                      className='mr-1 inline-block size-4'
                      src='/assets/page-star.svg'
                      alt=''
                    />
                    {e.title}
                    <button className='cursor-pointer'>
                      <img
                        className='ml-1 inline-block size-5'
                        src='/assets/delete.svg'
                        alt=''
                      />
                    </button>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
        <div className='flex gap-x-8'>
          <div className='relative'>
            <button
              onClick={() => setShowfollowers((e) => !e)}
              className='cursor-pointer'
            >
              Followers{' '}
              {showfollowers ? (
                <img
                  className='inline-block size-4'
                  src='/assets/arrow-up.svg'
                  alt='icon'
                />
              ) : (
                <img
                  className='inline-block size-4'
                  src='/assets/arrow-down.svg'
                  alt='icon'
                />
              )}
            </button>
            {showfollowers && (
              <div className='absolute top-8 right-2 z-20 flex h-fit min-w-35 flex-col gap-y-2 overflow-y-auto rounded-md border border-black/10 bg-white p-2'>
                {user.followers.length === 0 ? (
                  <p className='text-sm text-black/70'>No followers yet</p>
                ) : (
                  user.followers.map((e, index) => (
                    <div key={index} className='text-sm'>
                      <img
                        className='mr-1 inline-block size-5 rounded-full object-cover'
                        src={e.avatarurl}
                        alt='image'
                      />
                      {e.username}
                      <img
                        src='/assets/verified.svg'
                        alt='image'
                        className='ml-1 inline-block size-3'
                      />
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          <div className='relative'>
            <button
              onClick={() => setShowfollowing((e) => !e)}
              className='cursor-pointer'
            >
              Following{' '}
              {showfollowing ? (
                <img
                  className='inline-block size-4'
                  src='/assets/arrow-up.svg'
                  alt='icon'
                />
              ) : (
                <img
                  className='inline-block size-4'
                  src='/assets/arrow-down.svg'
                  alt='icon'
                />
              )}
            </button>
            {showfollowing && (
              <div className='absolute top-8 z-20 flex h-fit min-w-35 flex-col gap-y-2 overflow-y-auto rounded-md border border-black/10 bg-[white] p-2 transition duration-400'>
                {user.following.length === 0 ? (
                  <p className='text-sm text-black/70'>following no one yet</p>
                ) : (
                  user.following.map((e, index) => (
                    <div key={index} className='text-sm'>
                      <img
                        className='mr-1 inline-block size-5 rounded-full object-cover object-center'
                        src={e.avatarurl}
                        alt='image'
                      />
                      {e.username}
                      <img
                        src='/assets/verified.svg'
                        alt='image'
                        className='ml-1 inline-block size-3'
                      />
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='rounded-xl border border-black/10 bg-white p-6 shadow-sm'>
        <h2 className='text-lg font-medium'>
          Analytics&nbsp; -&nbsp;{' '}
          <span className='text-sm text-black/70'>
            ( {user.createdat}&nbsp; -&nbsp; Today )
          </span>
        </h2>

        <div className='flex h-60 items-center gap-x-20 overflow-hidden focus:outline-none'>
          <MajorPieChart views={views} likes={likes} comments={comments} />
          <div className='focus:outlien-none flex flex-col gap-5'>
            <RingChart value={views} color='#ff6b6b' label='Views' />
            <RingChart value={likes} color='#4dabf7' label='Likes' />
            <RingChart value={comments} color='#82c91e' label='Comments' />
          </div>
        </div>

        {/* Legend */}
        <div className='mt-4 flex gap-5 text-sm text-black/70'>
          <div className='flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-[#ff6b6b]'></span>
            Views
          </div>
          <div className='flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-[#4dabf7]'></span>
            Likes
          </div>
          <div className='flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-[#82c91e]'></span>
            Comments
          </div>
        </div>
      </div>
    </main>
  );
}

export default Stats;
