'use client';

import NavMenu from '@/libs/constants/navMenu';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Profile from './Profile';

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <header className="bg-[#F3EEEA] py-6">
      <div className="container flex items-center justify-between">
        <div className="gap-20 items-center font-semibold text-sm hidden sm:flex">
          <Link href={'/'} className='Menu'>
            <Image
              src={'/images/LogoRed.png'}
              width={100}
              height={30}
              alt="Logo"
            />
          </Link>
          {NavMenu.map((menu, index) => (
            <Link key={index} href={menu.url} className='Menu'>
              {menu.menu}
            </Link>
          ))}
        </div>
        {session ? (
          <Profile name={session.user.name} />
        ) : (
          <div className="flex gap-10 items-center font-semibold text-sm">
            <Link href={'/signin'} className='Menu'>Sign In</Link>
            <Link
              className="Menu border py-2 px-4 border-black rounded-full"
              href={'/signup'}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
