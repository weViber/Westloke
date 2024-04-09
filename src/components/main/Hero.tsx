import { cn } from '@/utils/style';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={cn('w-full min-h-screen', 'bg-[#F3EEEA]')}>
      <div
        className={cn(
          'w-full h-full container flex flex-col items-center justify-between',
          'pt-16 pb-36',
          "bg-[url('/images/MainBG.png')] bg-no-repeat bg-center bg-cover"
        )}
      >
        <div className="flex flex-col items-center gap-4">
          <h2 className="pretendard text-6xl font-[500] tracking-tighter">
            Westloke Amps
          </h2>
          <p className="text-base font-medium">Redmond,WA</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Link
            href={'/amplifiers'}
            className="flex items-center text-2xl font-bold transition-all ease-in-out hover:opacity-30"
          >
            <p>Model 6</p>
          </Link>
          <div className="flex items-center justify-center gap-6">
            <p>Lifetime Warranty for Amp itself</p>
            <p>|</p>
            <p>5 Years Warranty for the Tubes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
