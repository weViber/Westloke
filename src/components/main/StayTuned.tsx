import { FiInstagram, FiMail } from 'react-icons/fi';

import { cn } from '@/utils/style';
import Link from 'next/link';

const StayTuned = () => {
  return (
    <div className="bg-[#F3EEEA]">
      <div
        className={cn(
          'w-[660px] py-8 mx-auto',
          'flex flex-col items-center justify-center'
        )}
      >
        <h2 className="text-4xl font-semibold">Stay Tuned</h2>
        <p className="text-base font-medium mt-2">
          Check out Events and News letter
        </p>
        <div className="flex w-full items-center justify-between gap-2 mt-8">
          <input
            type="text"
            placeholder="Your Email"
            className="flex-1 h-12 bg-inherit border border-black px-4"
          />
          <button className="px-16 h-12 bg-[#B50000] text-white">
            Subscribe
          </button>
        </div>
        <div className={cn('flex gap-8 mt-16', 'text-2xl')}>
          <Link href={'/events'} className="Menu">
            <FiInstagram />
          </Link>
          <Link href={'/events'} className="Menu">
            <FiMail />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default StayTuned;
