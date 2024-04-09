import Link from 'next/link';

const SeoulSession = () => {
  return (
    <div className="w-full h-[550px] bg-[url('/images/SeoulSessionBG.png')] flex items-end py-16">
      <div className="container flex item-center justify-between text-white">
        <div>
          <h2 className="text-bold text-4xl">Seoul Session</h2>
          <p>by Ryle Lee and Junu</p>
        </div>
        <Link href={'/session/seoul'} className='Menu'>
          <button className="px-8 py-4 border border-white">
            Watch Video ▶
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SeoulSession;
