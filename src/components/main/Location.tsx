import { cn } from '@/utils/style';
import { IoLocationSharp } from 'react-icons/io5';

const Location = () => {
  return (
    <div
      className={cn(
        'w-full h-[550px] flex items-end py-16 my-8',
        "bg-[url('/images/LocationBG.png')] bg-no-repeat bg-cover bg-center"
      )}
    >
      <div className="container flex flex-col items-start justify-between text-white">
        <div className="flex gap-2 items-center mb-6">
          <IoLocationSharp />
          <p>Redmond, Washington, USA</p>
        </div>
        <h2 className="text-bold text-4xl mb-2">Made in Redmond,WA</h2>
        <p>Made by Hand</p>
      </div>
    </div>
  );
};
export default Location;
