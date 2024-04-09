import Link from 'next/link';
import { cn } from '@/utils/style';

const SeoulSession = () => {
  return (
    <div className="w-full h-[550px] bg-[url('/images/SeoulSessionBG.png')] flex items-end py-16">
      <div className="container flex item-center justify-between text-white">
        <div>
          <h2 className="text-bold text-4xl">Seoul Session</h2>
          <p>by Ryle Lee and Junu</p>
        </div>
        <Link href={'/session/seoul'}>
          <button className={cn("px-8 py-4 border border-white",
            'hover:bg-white hover:text-black hover:border-black',
            'ease-in-out duration-300 transition-all'
          )}>
            Watch Video ▶
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SeoulSession;
