'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavMenu from '@/libs/constants/navMenu';
import Profile from './Profile';
import { cn } from '@/utils/style';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <header className="bg-[#F3EEEA] py-6">
      <div className="container flex items-center justify-between">
        <div className="gap-20 items-center font-semibold text-sm hidden sm:flex">
          <Link href={'/'} className="Menu">
            <Image
              src={'/images/LogoRed.png'}
              width={100}
              height={30}
              alt="Logo"
            />
          </Link>
          {NavMenu.map((menu, index) => (
            <Link key={index} href={menu.url} className="Menu">
              {menu.menu}
            </Link>
          ))}
        </div>
        {session ? (
          <Profile name={session.user.name} />
        ) : (
          <Link
            className={cn(
              'border font-semibold text-sm py-2 px-4 border-black rounded-full',
              'hover:bg-black hover:text-white'
            )}
            href={'/signin'}
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
