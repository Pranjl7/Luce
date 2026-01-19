import React from 'react';
import Reactions from '../ui/Reactions';
import ContentPageReactions from '../ui/Contentpage-Reactions';

function ContentPage() {
  return (
    <main className='mx-auto flex max-h-[90vh] overflow-auto scrollbar-simple pr-2 max-w-172 flex-col gap-y-8 pt-4'>
      <div className='flex flex-col gap-y-7'>
        <div className='flex gap-x-2'>
          <p className='rounded-full border border-black/20 px-3 py-1 text-sm font-medium text-black/70'>
            Tech
          </p>
          <p className='rounded-full border border-black/20 px-3 py-1 text-sm font-medium text-black/70'>
            Commerce
          </p>
        </div>
        <h1
          id='titlebox'
          className='font-merriweather w-full text-4xl leading-12 font-bold tracking-tight'
        >
          My Manager Quit Right After Q3 Planning. We All Thought She Was Crazy.
          She Wasn't.
        </h1>

        <ContentPageReactions />
      </div>

      <img
        id='content-image'
        className='aspect-10/6 w-full object-cover object-center'
        src='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4V4IOqG27oqNgn1CTAZw-Q.png'
        alt=''
      />

      <div id='contentbox' className='w-full text-xl'>
        We chose some of the most currently popular niches and selected several
        blog examples for each niche. We researched every blog to learn more
        about CMS'es and the themes that they're using. <br /> <br />
        Finally, we included the sources of income for every blog, which can
        help you to understand how blogs make money. <br /> <br /> This list
        should inspire you to create your own personal blog in a niche that you
        are passionate about. This is an opportunity to learn from the best in
        the online business.
      </div>
    </main>
  );
}

export default ContentPage;
