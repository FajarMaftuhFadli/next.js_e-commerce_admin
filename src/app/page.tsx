'use client';

import AuthPopUp from '@/components/authPopUp';
import AuthSighOutButton from '@/components/authSignOutButton';
import ShowSession from '@/components/showSession';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <main className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="flex w-80 flex-col items-center justify-center space-y-4 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 p-10 shadow-lg ring-2 ring-white">
          <AuthSighOutButton />
        </div>
        <ShowSession />
      </main>
    );
  }
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <AuthPopUp />
    </div>
  );
}
