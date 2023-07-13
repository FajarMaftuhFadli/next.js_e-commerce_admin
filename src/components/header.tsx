'use client';
import { useSession } from 'next-auth/react';
import AuthSighOutButton from './authSignOutButton';
import Image from 'next/image';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex h-20 w-full items-center justify-between border-b px-10">
      <div className="text-3xl font-semibold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <Image
          src={`${session?.user?.image}`}
          alt="profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <AuthSighOutButton>
          <span className="font-semibold hover:text-amber-500">Sign Out</span>
        </AuthSighOutButton>
      </div>
    </header>
  );
}
