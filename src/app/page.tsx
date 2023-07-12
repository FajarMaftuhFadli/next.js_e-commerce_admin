'use client';

import AuthPopUp from '@/components/authPopUp';
import Nav from '@/components/nav';
// import ShowSession from '@/components/showSession';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <main className="flex">
        <Nav />
        <div className="p-4">Lorem ipsum dolor sit amet</div>
        {/* <ShowSession /> */}
      </main>
    );
  }
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <AuthPopUp />
    </div>
  );
}
