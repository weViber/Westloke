'use client';

import { FiInstagram, FiMail } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { westlokeamps, westlokemusicEmail } from '@/libs/constants/sns';

import Link from 'next/link';
import { Spinner } from '@nextui-org/react';
import axios from 'axios';
import { cn } from '@/utils/style';

const StayTuned = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/subscribe', { email }); // 구독 요청
      if (response.status === 200) {
        alert(response.data.message);
        setEmail('');
      }
    } catch (error: any) {
      let errorMessage = 'Subscription processing failed. Please try again.';
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };
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
        <form
          onSubmit={subscribe}
          className="flex w-full items-center justify-between gap-2 mt-8"
        >
          <input
            type="text"
            placeholder="Your Email"
            className="flex-1 h-12 bg-inherit border border-black px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={cn(
              'px-16 h-12 bg-[#B50000] text-white',
              'hover:bg-[#FF0000] ease-in-out duration-300 transition-all'
            )}
          >
            {loading ? <Spinner /> : 'Subscribe'}
          </button>
        </form>
        <div className={cn('flex gap-8 mt-16', 'text-2xl')}>
          <Link href={westlokeamps} className="Menu">
            <FiInstagram />
          </Link>
          <Link href={westlokemusicEmail} className="Menu">
            <FiMail />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default StayTuned;
