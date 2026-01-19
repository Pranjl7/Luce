import { useClerk } from '@clerk/clerk-react';

function Box({
  h1,
  h2,
  paragraph,
  percent,
  boxbg,
  textcolor,
  arrowcolor,
  arrowbg,
}) {

  const { openSignUp } = useClerk()
  return (
    <div
      className={`flex h-fit flex-col gap-y-2 rounded-xl p-6 shadow-2xl`}
      style={{ backgroundColor: boxbg, color: textcolor }}
    >
      {arrowbg === 'black' ? (
        <p className='text-sm font-medium text-neutral-600/90'>{h1}</p>
      ) : (
        <p className='text-sm font-medium text-white/70'>{h1}</p>
      )}
      <p className='text-xl font-bold'>{h2}</p>
      {arrowbg === 'black' ? (
        <p className='text-sm font-medium tracking-tight'>{paragraph}</p>
      ) : (
        <p className='text-sm font-medium tracking-tight text-white/70'>
          {paragraph}
        </p>
      )}
      {arrowbg === 'black' ? (
        <div className='my-3 border-t border-black/10'></div>
      ) : (
        <div className='my-3 border-t border-neutral-100/20'></div>
      )}
      <div className='flex w-full items-center justify-between'>
        <p className='text-lg font-semibold'>{percent}</p>
        <button onClick={() => openSignUp()} aria-label={`open ${h1}`} className="cursor-pointer">
          <img
            className={`size-8 rounded-lg p-2.5`}
            style={{ backgroundColor: arrowbg }}
            src={`./assets/arrow-${arrowcolor}.svg`}
            alt=''
          />
        </button>
      </div>
    </div>
  );
}

export default Box;
